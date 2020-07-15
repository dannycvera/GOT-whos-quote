//
//global array for character choices on screen
const choiceArr = new Array(4);
const charListFull = [];
//global variable for score
let score = 0;
let interval;
//downloads all characters and returns an array 
const charImageList = async () => {
  try {
    const URL_ALL = `https://api.got.show/api/show/characters/`;
    const allCharObj = await axios.get(URL_ALL);

    // for testing. Logs all the records and if they load their images correctly
    // for (let i = 0; i < allCharObj.data.length; i++) {
    //   let image = document.createElement('img')
    //   image.src = allCharObj.data[i].image;
    //   //console.log(i, allCharObj.data[i].name);
    //   image.onload = function () {
    //     console.log(i, 'image loaded');
    //   }
    //   image.onerror = function (error) {
    //     console.error(`this image didnt load`, i, allCharObj.data[i].image, error)
    //   }
    // }
    // console.log(allCharObj.data);

    // removing records that I know have problems loading the images.
    allCharObj.data.splice(146, 1);
    allCharObj.data.splice(97, 1);
    allCharObj.data.splice(92, 1);
    allCharObj.data.splice(90, 1);
    //console.log("allCharObj", allCharObj.data);
    for (let i of allCharObj.data) {
      charListFull.push(i);
    }
    console.log("charListFull", charListFull);
    //charListFull = allCharObj.data;
  } catch (error) {
    console.error(`you have an error${error}`)
  }
}
charImageList();

const randomQuote = async () => {
  const URL = `https://game-of-thrones-quotes.herokuapp.com/v1/random`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(`You have an error. Please clean it up ${error}`)
  }
}

// checks correct answer and displays the appropriate text
const answer = (data, correct) => {
  let img = document.querySelectorAll('img');
  let x;       //correct image index stored in x
  for (let i = 0; i < img.length; i++) {

    if (data.image == img[i].src) {
      img[i].classList.add("largeImg");
      x = i;        // storing the correct answer image index
    } else {
      img[i].classList.add("smallImg");
      img[i].style.opacity = "0";
      setTimeout(() => { img[i].style.display = 'none'; }, 300);
    }
  }
  // increasing the width of the parent of the correct answer image
  let parentAside = img[x].parentElement;
  let asides = document.querySelectorAll('aside');
  for (let i = 0; i < asides.length; i++) {
    if (asides[i] === parentAside) {
      asides[i].classList.add("width-auto");
    } else {
      asides[i].classList.add("width-0");
    }
  }
  // cloning the node to remove the event listener on the large image. Learned this technique from "BenD"
  // https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element
  let newImg = img[x].cloneNode();
  setTimeout(() => { parentAside.replaceChild(newImg, img[x]); }, 300); //settimeout to allow for animations
  //console.log("correct answer?", correct);

  // text to display if correct or incorrect
  console.log('constructing answer', data)
  let descText;
  let isCorrect;
  let pronoun;
  let tense;
  let allTitles;
  let pluralTitles;
  let alive;
  if (correct) {
    isCorrect = 'CORRECT!!!'
    score += 1;
  } else {
    isCorrect = 'INCORRECT!!!'
    score -= 1;
  }

  if (data.gender === 'male') {
    pronoun = 'His'
  } else {
    pronoun = 'Her'
  }

  if (data.alive == true) {
    tense = 'is';
    alive = '';
  } else {
    tense = 'was';
    alive = " And is no longer with us.";
  }

  if (data.titles.length = 1) {
    pluralTitles = 'title includes';
    allTitles = data.titles;
  } else {
    pluralTitles = 'titles include';
    allTitles = data.titles[0]
    for (let i = 1; i < data.titles.length; i++) {
      if (data.titles[i] !== data.titles.length - 1) {
        allTitles.concat(", ", data.titles[i])
      } else {
        allTitles.concat(" and ", data.titles[i])
      }
    }
  }

  descText = `${pronoun} ${pluralTitles} ${allTitles}`
  document.querySelector('p').innerHTML = `${isCorrect}<br>It ${tense} <b>${data.name}</b> of ${data.house}. ${descText}.${alive}`
  // check if you win
  if (score === 10) {
    document.querySelector('#score').innerText = 'WIN!!!';
    score = 0
    document.querySelector('#start').innerText = 'play again?';
    interval = setInterval(win, 500);
  } else {
    document.querySelector('#score').innerText = score;
  }
}

const win = () => {
  flashScore = document.querySelector('#score');
  flashScore.style.color = flashScore.style.color == 'red' ? 'black' : 'red';
}

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
    // calling the fuction to update score and display the appropriate text when correct
    img[ansLoc].addEventListener('click', () => {
      answer(response.data, true);
    });

    // storing the correct character data in the global array. May need it later
    choiceArr[ansLoc] = response.data;
    //retrieving a list of all the characters

    //const allChar = await charImageList();
    //console.log("charlistFull", charListFull);
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
        // only fills in the global array if not a duplicate. 
        // Which gets you one step closer to exiting the loop
        // also checking for missing image keys and duplicates
        //console.log(choiceArr[i])
        if (isDup !== true && ('image' in charListFull[x]) && !(charListFull[x].image == '')) {
          image.src = charListFull[x].image;
          choiceArr[i] = charListFull[x];
          // calling the fuction to update score and display the appropriate text when wrong
          image.addEventListener('click', () => {
            answer(response.data, false);
          });
          //}

        }
      }
    }
    for (let i = 0; i < img.length; i++) {
      img[i].style.opacity = "1.0";
    }
    //return response.data
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
  //console.log(name);
  choices(name);
}
// displays the random quote
const displayQuote = (data) => {
  document.querySelector('#quote').innerText = data.sentence;
  document.querySelector('#quote').style.opacity = "1.0";
}
//resets images and clears global choiceArr
const nextQuote = async () => {
  let img = document.querySelectorAll('img');
  let asideImg = document
  document.querySelector('#imgs1').classList.remove('width-auto', 'width-0');
  document.querySelector('#imgs2').classList.remove('width-auto', 'width-0');
  for (let i = 0; i < img.length; i++) {
    delete choiceArr[i];

    // have to delete the img elemtents and recreate them to clear all the eventListeners. 
    // Trust me this is the fastest way Learned this technique from "BenD"
    // https://stackoverflow.com/questions/9251837/how-to-remove-all-listeners-in-an-element


    img[i].style.opacity = "0";
    let newImg = document.createElement('img');
    img[i].parentElement.append(newImg);
    img[i].remove();
    newImg.style.opacity = "0";
    newImg.style.display = "block";

    // opacity is 0 at this point so making the display visible is OK
    //console.log(newImg);
  }
  //console.log('choiceArr', choiceArr);
  //fading the images and clears them
  document.querySelector('#quote').style.opacity = "0";
  const data = await randomQuote();
  displayQuote(data);
  checkChar(data);
  // checks if you just won and need to reset the scoreboard
  if (document.querySelector('#start').innerText != 'next quote') {
    let checkScore = document.querySelector('#score');
    if (checkScore.innerText === 'WIN!!!') {
      clearInterval(interval);
      checkScore.innerText = score;
      checkScore.style.color = 'rgb(255, 238, 0)';
    }
    document.querySelector('#start').innerText = 'next quote';
  }
}

document.querySelector('#button').addEventListener('click', nextQuote);
//})