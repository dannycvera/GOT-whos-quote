// global variables
//
// scoring
const winningScore = 5;
const losingScore = -5;
let score = 0;
let winInterval; // used later for flashing WIN!! on screen
// global local storage of the current score
if (localStorage.score) {
  score = Number(localStorage.score);
  document.querySelector("#score").innerText = score;
}
// global local storage of previously viewed quotes
if (localStorage.prevQuotes === undefined) {
  localStorage.prevQuotes = JSON.stringify([]);
}
const prevQuotes = JSON.parse(localStorage.prevQuotes);

// resets the score and previous quotes array and flashes the game result text
const gameEnd = () => {
  score = 0;
  // resets the previous quotes array
  while (prevQuotes.length > 0) {
    prevQuotes.pop();
  }
  localStorage.prevQuotes = JSON.stringify(prevQuotes);
  document.querySelector("#start").innerText = "play again?";
  // sets the word 'WIN!!!' to change color repeatedly
  winInterval = setInterval(() => {
    let scoreWin = document.querySelector("#score");
    if (scoreWin.classList.contains("end")) {
      scoreWin.classList.remove("end");
    } else {
      scoreWin.classList.add("end");
    }
  }, 450);
};

// checks if the answer is correct and displays the appropriate text
const answer = (data, correct, ansLoc) => {
  // makes the next quote button visable again
  document.querySelector("#button").style.display = "block";
  document.querySelector("#button").style.opacity = "1";
  let images = document.querySelectorAll(".choice-img");

  for (let i = 0; i < images.length; i++) {
    // checks for the correct image by comparing
    // the src url's to the .image property from the data passed
    if (ansLoc === i) {
      images[i].classList.add("large-img"); //making the correct answer larger
    } else {
      // wrong answers shrink and fade out
      images[i].classList.add("small-img");
      images[i].style.opacity = "0";
    }
  }
  // increasing the width of the parent of the correct answer image
  let correctAside = images[ansLoc].parentElement;
  let asides = document.querySelectorAll("aside");
  for (let i = 0; i < asides.length; i++) {
    if (asides[i] === correctAside) {
      asides[i].classList.add("width-auto"); // Allows the parent of the correct image to grow
    } else {
      asides[i].classList.add("width-0"); // shrinks the size of the parent of the wrong answers
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].onclick = () => {
      false;
    };
  }
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
    isCorrect = "CORRECT!!!";
    score += 1;
  } else {
    isCorrect = "INCORRECT!!!";
    score -= 1;
  }
  // checks if male or female from the passed data
  if (data.gender === "male") {
    pronoun = "His";
  } else {
    pronoun = "Her";
  }
  // checks if alive from the passed data
  if (data.alive == true) {
    tense = "is";
    alive = "";
  } else {
    tense = "was";
    alive = " And is no longer with us.";
  }
  pluralTitles = "title is";
  allTitles = data.title;
  // puts all the variables together to generate the answer text
  descText = `${pronoun} ${pluralTitles} ${allTitles}`;
  document.querySelector(
    "p"
  ).innerHTML = `${isCorrect}<br>It ${tense} <b>${data.fullName}</b> of ${data.family}. ${descText}.${alive}`;
  // check if you win then resets the score and empties the previous quotes array
  if (score === winningScore) {
    document.querySelector("#score").innerText = "WIN!!!";
    gameEnd();
  } else if (score == losingScore) {
    document.querySelector("p").innerHTML =
      "You have guessed wrong too many times.<br>You will now be burned alive!";
    document.querySelector("#score").innerText = "Lost!!!";
    gameEnd();
  } else {
    // otherwise just updates the score
    document.querySelector("#score").innerText = score;
  }
  // stores the score in the local storage in case your browser closes
  localStorage.score = score;
};

// generates random whole numbers starting from zero to the parameter "max".
const rand = (max) => {
  return Math.floor(Math.random() * max);
};

// retrieves character information and displays character images
const choices = async (name) => {
  try {
    // retrieving character info from global character list
    // const charObj = charListFull.find((obj) => obj.fullName === name);
    const charObj = characterData[characterMap[name]];
    let images = document.querySelectorAll(".choice-img");
    // setting the image index of the correct answer
    let ansLoc = rand(images.length);
    images[ansLoc].src = charObj.imageUrl; //.split("/revision", 1)[0];
    // calling the fuction "answer" to update score and display the appropriate text when correct
    images[ansLoc].onclick = () => {
      answer(charObj, true, ansLoc);
    };
    //array to strore currently displayed characters
    const choiceArr = new Array(4);
    choiceArr[ansLoc] = charObj;
    //retrieving a list of all the characters
    for (let i = 0; i < images.length; i++) {
      let image = images[i];
      //will stay in loop until global array is filled with 4 different characters
      while (choiceArr[i] === undefined) {
        let x = rand(characterData.length);
        let isDup = false;
        for (let y = 0; y < images.length; y++) {
          // checking for duplicates inside the global variable choiceArr
          if (
            choiceArr[y] !== undefined &&
            characterData[x].fullName === choiceArr[y].fullName
          ) {
            isDup = true;
          }
        }
        // If not a Duplicate you get one step closer to exiting the loop
        // also checking for missing image keys in the oject
        if (
          isDup !== true &&
          "image" in characterData[x] &&
          !(characterData[x].imageUrl == "")
        ) {
          image.src = characterData[x].imageUrl; //.split("/revision", 1)[0]; //to remove all the extra parameters after the actual image file
          choiceArr[i] = characterData[x];
          // calling the answer function to update score and the appropriate text when a wrong answer is given
          image.onclick = () => {
            answer(charObj, false, ansLoc);
          };
        }
      }
    }
    //make images visible
    for (let i = 0; i < images.length; i++) {
      images[i].style.opacity = "1.0";
    }
  } catch (error) {
    console.error(`Hey you got an error${error}`);
  }
};

// displays the quote
const displayQuote = (data) => {
  // clears loading SVG when next quote is about to be displayed
  document.querySelector("section").removeAttribute("style", "background");
  document.querySelector("#quote").innerText = data.sentence;
  document.querySelector("#quote").style.opacity = "1.0";
  document.querySelector("#button").style.opacity = "0";
  setTimeout(() => {
    document.querySelector("#button").style.display = "none";
  }, 200);

  // checks if you just won and needs to reset the scoreboard
  if (document.querySelector("#start").innerText !== "next quote") {
    let checkScore = document.querySelector("#score");
    if (
      checkScore.innerText === "WIN!!!" ||
      checkScore.innerText === "Lost!!!"
    ) {
      clearInterval(winInterval);
      // resets array storing used quotes
      checkScore.innerText = score;
      document.querySelector("#score").classList.remove("end");
    }
    document.querySelector("#start").innerText = "next quote";
  }
};

// requests random quote from API
const randomQuote = async () => {
  const URL = `https://api.gameofthronesquotes.xyz/v1/random`;
  try {
    let resp = await axios.get(URL);
    let i = 0;
    let x = 0; // protects against infinite loops. If too many duplicate quotes have been requested.
    while (i < prevQuotes.length) {
      let lastQuoteChara = prevQuotes[prevQuotes.length - 1].character.name;
      // checks if the current quote is a duplicate of any previous quotes
      if (
        resp.data.sentence === prevQuotes[i].sentence ||
        resp.data.character.name === lastQuoteChara
      ) {
        i = 0;
        resp = await axios.get(URL);
        x++; // protects against infinite loops. If too many duplicate quotes have been requested.
        if (x > 50) {
          break;
        }
      } else {
        i++;
      }
    }
    // storing previous quote to protect against duplicates quotes
    prevQuotes.push(resp.data);
    localStorage.prevQuotes = JSON.stringify(prevQuotes);
    displayQuote(resp.data);
    let name = resp?.data?.character?.name;
    choices(name);
    return resp.data;
  } catch (error) {
    console.error(`You have an error. Please clean it up ${error}`);
  }
};

//resets images and clears global choiceArr
const nextQuote = () => {
  if (document.querySelector(".large-img")) {
    document.querySelector(".large-img").style.opacity = "0";
  }
  document.querySelector("#quote").style.opacity = "0";
  let loader = document.querySelector("section");
  // sets loading SVG while waiting for the next quote
  loader.style.background =
    "url(./img/loading-slow.svg) center/contain no-repeat";
  // timeout needed for transition effects to finish
  setTimeout(() => {
    let images = document.querySelectorAll(".choice-img");
    for (let i = 0; i < images.length; i++) {
      // hiding the last shown image
      images[i].classList.remove("large-img", "small-img");
      images[i].style.opacity = "0";
      images[i].src = "";
      // need to get them ready for the next display of choices
      images[i].style.display = "block";
    }
    document.querySelector("#imgs1").classList.remove("width-auto", "width-0");
    document.querySelector("#imgs2").classList.remove("width-auto", "width-0");
    // retrieves and displays the next random quote
    randomQuote();
  }, 200);
};

document.querySelector("#button").onclick = nextQuote;