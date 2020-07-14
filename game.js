//global object variable for character list with image url's
const choiceArr = new Array(4);
let score = 0;
//generates an object with the name:imageURL as key value pairs 
const charImageList = async () => {
  try {
    const URL_ALL = `https://api.got.show/api/show/characters/`;
    const allCharObj = await axios.get(URL_ALL);

    console.log(allCharObj.data);
    return allCharObj.data;
  } catch (error) {
    console.error(`you have an error${error}`)
  }
}
//charImageList();

//const charImageList = charObj();
//const charImageList = charObj();
//console.log(charImageList.length);
//console.log(charImageList);

const randomQuote = async () => {
  const URL = `https://game-of-thrones-quotes.herokuapp.com/v1/random`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(`You have an error. Please clean it up ${error}`)
  }
}


const answer = (data, correct) => {
  let img = document.querySelectorAll('img');
  let x;       //correct image index
  for (let i = 0; i < img.length; i++) {
    console.log(data.image === img[i].src);
    console.log(data.image);
    if (data.image == img[i].src) {
      img[i].classList.add("largeImg");
      x = i;
    } else {
      img[i].classList.add("smallImg");
    }
  }
  console.log("are you correct", correct);
  if (correct) {
    document.querySelector('p').innerHTML = `CORRECT!!<br>It was <b>${data.name}</b> sffsdf sdfdsfsd sdf sdfsd fsdfdsfsd fdsfsdfsd fsdfdsf sf sdf ds fsdfsdfsdfsdfsdf s sdf`
    score += 1;
    document.querySelector('#score').innerText = score;
    console.log(img[x].classList);
  } else {
    document.querySelector('p').innerHTML = `INCORRECT!!<br>It was <b>${data.name}</b> sffsdf sdfdsfsd sdf sdfsd fsdfdsfsd fdsfsdfsd fsdfdsf sf sdf ds fsdfsdfsdfsdfsdf s sdf`
    score -= 1;
    document.querySelector('#score').innerText = score;
    console.log(img[x].classList);
  }
}

const rand = (max) => {
  return Math.floor(Math.random() * max);
}

// retrieves character information and displays incorrect information
const choices = async (name) => {
  try {
    const charURL = `https://api.got.show/api/show/characters/${name}`;
    const response = await axios.get(charURL);
    console.log(response, `this is ther name ${name}`);
    console.log(choiceArr);
    let img = document.querySelectorAll('img');
    let ansLoc = rand(img.length);
    img[ansLoc].src = response.data.image;
    img[ansLoc].addEventListener('click', () => {
      answer(response.data, true);
    });

    // storing the correct character data in the global array. May need it later
    choiceArr[ansLoc] = response.data;
    //retrieving a list of all the characters
    const allChar = await charImageList();
    for (let i = 0; i < img.length; i++) {
      //will stay in loop until global array is filled with 4 different characters
      while (choiceArr[i] == undefined) {
        let x = rand(allChar.length);
        let isDup = false;
        for (let y = 0; y < img.length; y++) {
          // need to check for undefined since the comparison below needs a value
          if (choiceArr[y] != undefined) {
            // checking for duplicates inside the global variable choiceArr
            if (allChar[x].name === choiceArr[y].name) {
              isDup = true;
            }
          }
        }
        // only fills in the global array if not a duplicate. 
        //Getting one step closer to exiting the loop
        console.log("it contains an image", ('image' in allChar[x]));
        if (isDup !== true && ('image' in allChar[x]) && !(allChar[x].image == '')) {
          img[i].src = allChar[x].image;
          choiceArr[i] = allChar[x];
          img[i].addEventListener('click', () => {
            answer(response.data, false);
          });
        }
      }
    }
    //console.log(choiceArr)
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

  choices(name);
}

const displayQuote = (data) => {
  document.querySelector('#quote').innerText = data.sentence;
  document.querySelector('#quote').style.opacity = "1.0";
}
//resets images and clears global choiceArr
const nextQuote = async () => {
  let img = document.querySelectorAll('img');
  for (let i = 0; i < img.length; i++) {
    img[i].style.opacity = "0";
    delete choiceArr[i];
    img[i].src = '';
    img[i].classList.remove('smallImg');
    img[i].classList.remove('largeImg');
    console.log(img[i].classList);
  }
  console.log('choiceArr', choiceArr);
  document.querySelector('#quote').style.opacity = "0";
  const data = await randomQuote();
  displayQuote(data);
  checkChar(data);
  if (document.querySelector('#button').innerText !== 'click to start') {
    document.querySelector('#button').innerText = 'next quote';
  }
}

document.querySelector('#button').addEventListener('click', nextQuote);
