// global variables
//
// scoring
const winningScore = 5;
const losingScore = -5
let score = 0;
let winInterval;   // used later for flashing WIN!! on screen
// global local storage
if (localStorage.score) {
  score = Number(localStorage.score);
  document.querySelector('#score').innerText = score;
}
if (localStorage.prevQuotes === undefined) {
  localStorage.prevQuotes = JSON.stringify([]);
}
const prevQuotes = JSON.parse(localStorage.prevQuotes);

// global array for character choices on screen
const charListFull = [];
//
// downloads all characters and stores in a global variable charListFull
const charImageList = async () => {
  try {
    const URL_ALL = `https://api.got.show/api/show/characters/`;
    const allCharObj = await axios.get(URL_ALL);
    // removing records that I know have problems loading the images.
    allCharObj.data.splice(146, 1);
    allCharObj.data.splice(97, 1);
    allCharObj.data.splice(92, 1);
    allCharObj.data.splice(90, 1);
    for (let i of allCharObj.data) {
      charListFull.push(i);
    }
    console.log("charListFull", charListFull);
  } catch (error) {
    console.error(`you have an error${error}`)
  }
}
charImageList();



// resets the score and previous quotes array and flashes the game result text
const gameEnd = () => {
  score = 0;
  // resets the previous quotes array
  while (prevQuotes.length > 0) {
    prevQuotes.pop();
  }
  localStorage.prevQuotes = JSON.stringify(prevQuotes);
  document.querySelector('#start').innerText = 'play again?';
  // sets the word 'WIN!!!' to change color repeatedly
  winInterval = setInterval(() => {
    let scoreWin = document.querySelector('#score');
    scoreWin.classList.toggle('end');
  }, 500);
}



// checks if the answer is correct and displays the appropriate text
const answer = (data, correct) => {
  // makes the next quote button visable again
  document.querySelector('#button').style.display = 'block';
  document.querySelector('#button').style.opacity = "1";
  let img = document.querySelectorAll('img');
  let x;       // correct image index stored in x
  for (let i = 0; i < img.length; i++) {
    // checks for the correct image by comparing 
    // the src url's to the .image property from the data passed
    if (data.image == img[i].src) {
      img[i].classList.add("largeImg");  //making the correct answer larger
      x = i;        // storing the correct answer image index
    } else {        // wrong answers shrink and fade out
      img[i].classList.add("smallImg");
      img[i].style.opacity = "0";
    }
  }
  // increasing the width of the parent of the correct answer image
  let correctAside = img[x].parentElement;
  let asides = document.querySelectorAll('aside');
  for (let i = 0; i < asides.length; i++) {
    if (asides[i] === correctAside) {
      asides[i].classList.add("width-auto");  // allows the aside with the correct image to grow
    } else {
      asides[i].classList.add("width-0");   // shrinks the size of the parent of the wrong answers
    }
  }
  // cloning the node to remove the event listener on the large image. Learned this technique from "BenD"
  // https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element
  let newImg = img[x].cloneNode();
  setTimeout(() => { correctAside.replaceChild(newImg, img[x]); }, 200); //settimeout to allow for animations
  // creating variables used to generate the answer text
  let descText;
  let isCorrect;
  let pronoun;
  let tense;
  let allTitles;
  let pluralTitles;
  let alive;
  // checks if the "correct" parameter is true.
  if (correct) {
    isCorrect = 'CORRECT!!!'
    score += 1;
  } else {
    isCorrect = 'INCORRECT!!!'
    score -= 1;
  }
  // checks if male or female from the passed data
  if (data.gender === 'male') {
    pronoun = 'His'
  } else {
    pronoun = 'Her'
  }
  // checks if alive from the passed data
  if (data.alive == true) {
    tense = 'is';
    alive = '';
  } else {
    tense = 'was';
    alive = " And is no longer with us.";
  }
  // checking if the character has more than one title. 
  // Currently the API only sends one title when searching individually.
  // In the future if I devote more screen space to the text, I can list all their titles
  // by cross referencing with charListFull.titles
  if (data.titles.length = 1) {
    pluralTitles = 'title includes';
    allTitles = data.titles;
  } else {
    pluralTitles = 'titles include';
    allTitles = data.titles[0];
    for (let i of data.titles) {
      if (i !== data.titles.length - 1) {
        allTitles.concat(", ", i);
      } else {
        allTitles.concat(" and ", i);
      }
    }
  }
  // puts all the variables together to generate the answer text
  descText = `${pronoun} ${pluralTitles} ${allTitles}`
  document.querySelector('p').innerHTML = `${isCorrect}<br>It ${tense} <b>${data.name}</b> of ${data.house}. ${descText}.${alive}`
  // check if you win then resets the score and empties the previous quotes array
  if (score === winningScore) {
    document.querySelector('#score').innerText = 'WIN!!!';
    gameEnd();
  } else if (score == losingScore) {
    document.querySelector('p').innerHTML = "You have guessed wrong too many times.<br>You will now be burned alive!";
    document.querySelector('#score').innerText = 'Lost!!!';
    gameEnd();

  } else {
    // otherwise just updates the score
    document.querySelector('#score').innerText = score;
  }
  // stores the score in the local storage in case your browser closes
  localStorage.score = score;
}


// generates random whole numbers starting from zero to the parameter "max".
const rand = (max) => {
  return Math.floor(Math.random() * max);
}


// retrieves character information and displays incorrect information
const choices = async (name) => {
  try {
    const charURL = `https://api.got.show/api/show/characters/${name}`;
    const response = await axios.get(charURL);
    console.log(response);
    let img = document.querySelectorAll('img');
    // setting the image index of the correct answer
    let ansLoc = rand(img.length);
    img[ansLoc].src = response.data.image;
    // calling the fuction "answer" to update score and display the appropriate text when correct
    img[ansLoc].addEventListener('click', () => {
      answer(response.data, true);
    });
    //array to strore currently displayed characters 
    const choiceArr = new Array(4);
    choiceArr[ansLoc] = response.data;
    //retrieving a list of all the characters
    for (let i = 0; i < img.length; i++) {
      let image = img[i];
      //will stay in loop until global array is filled with 4 different characters
      while (choiceArr[i] == undefined) {
        let x = rand(charListFull.length);
        let isDup = false;
        for (let y = 0; y < img.length; y++) {
          // need to check for undefined since the comparison below needs a value
          if (choiceArr[y] != undefined) {
            // checking for duplicates inside the global variable choiceArr
            if (charListFull[x].name === choiceArr[y].name) {
              isDup = true;
            }
          }
        }
        // If not a Duplicate you get one step closer to exiting the loop
        // also checking for missing image keys in the oject
        if ((isDup !== true) && ('image' in charListFull[x]) && !(charListFull[x].image == '')) {
          image.src = charListFull[x].image;
          choiceArr[i] = charListFull[x];
          // calling the answer function to update score and the appropriate text when a wrong answer is given
          image.addEventListener('click', () => {
            answer(response.data, false);
          });
        }
      }
    }
    for (let i = 0; i < img.length; i++) {
      img[i].style.opacity = "1.0";
    }
  } catch (error) {
    console.error(`Hey you got an error${error}`)
  }
}

// checks and fixes names that dont match correctly 
// from the quotes database to the character data
const checkChar = (data) => {
  let name = data.character.name;
  if (name === "Lord Varys") {
    name = 'Varys';
  } else if (name === 'Tormund') {
    name = 'Tormund Giantsbane';
  } else if (name === "Ramsay Bolton") {
    name = "Ramsay Snow";
  } else if (name === 'Eddard "Ned" Stark') {
    name = 'Eddard Stark';
  } else if (name === 'Brienne of Tharth') {
    name = 'Brienne of Tarth';
  } else if (name === 'Olenna Tyrell') {
    name = "Olenna Redwyne"
  }
  choices(name);
}



// displays the random quote
const displayQuote = (data) => {
  document.querySelector('#quote').innerText = data.sentence;
  document.querySelector('#quote').style.opacity = "1.0";
  document.querySelector('#button').style.opacity = "0";
  setTimeout(() => { document.querySelector('#button').style.display = 'none'; }, 200)
}



// requests random quote from API
const randomQuote = async () => {
  const URL = `https://game-of-thrones-quotes.herokuapp.com/v1/random`;
  try {
    let response = await axios.get(URL);
    let i = 0;
    let x = 0;      // protects against infinate loops if too many quotes have been requested.
    while (i < prevQuotes.length || x >= 10) {
      // checks if the current quote is a duplicate of any previous quotes
      if ((response.data.sentence === prevQuotes[i].sentence) || (response.data.character.name === prevQuotes[prevQuotes.length - 1].character.name)) {
        i = 0
        response = await axios.get(URL);
        x++     // protects against infinate loops if too many quotes have been requested.
      } else {
        i++
      }
    }
    if (x >= 10 || score == -10) {
      document.querySelector('p').innerText = " There are no more quotes. You have lost.";
      document.querySelector('#score').innerText = 'Lost!!!';
      gameEnd();
    }

    return response.data;
  } catch (error) {
    console.error(`You have an error. Please clean it up ${error}`)
  }
}


// stores the random quote data in a variable and passes it to multiple functions
const getQuote = async () => {
  //fading the images and clears them
  document.querySelector('#quote').style.opacity = "0";
  let loader = document.querySelector('#loader');
  loader.style.display = 'block';
  loader.style.opacity = '1.0';
  const data = await randomQuote();
  // storing previous quote to protect against duplicates quotes
  prevQuotes.push(data);
  localStorage.prevQuotes = JSON.stringify(prevQuotes);
  setTimeout(() => { loader.style.display = 'none' }, 200);
  displayQuote(data);
  checkChar(data);
  // checks if you just won and needs to reset the scoreboard
  if (document.querySelector('#start').innerText != 'next quote') {
    let checkScore = document.querySelector('#score');
    if (checkScore.innerText === 'WIN!!!') {
      clearInterval(winInterval);
      // resets array storing used quotes
      checkScore.innerText = score;
      checkScore.style.color = 'rgb(255, 238, 0)';
    }
    document.querySelector('#start').innerText = 'next quote';
  }
}



//resets images and clears global choiceArr
const nextQuote = () => {
  if (document.querySelector('.largeImg')) {
    document.querySelector('.largeImg').style.opacity = "0";
  }
  // timeout needed for transition effects to finish
  setTimeout(() => {
    let img = document.querySelectorAll('img');
    document.querySelector('#imgs1').classList.remove('width-auto', 'width-0');
    document.querySelector('#imgs2').classList.remove('width-auto', 'width-0');
    for (let i = 0; i < img.length; i++) {
      img[i].style.opacity = "0";
      // Deleting then recreasting the img elements to clear all the eventListeners. 
      // https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element
      let newImg = document.createElement('img');
      img[i].parentElement.append(newImg);
      img[i].remove();
      newImg.style.opacity = "0";
      newImg.style.display = "block";
    }
    getQuote();
  }, 200)
}


// launches new quote and brings up four choices
document.querySelector('#button').addEventListener('click', nextQuote);
