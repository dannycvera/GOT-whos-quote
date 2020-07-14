//global object variable for character list with image url's
const choiceArr = new Array(4);
let score = 0;
//generates an object with the name:imageURL as key value pairs 
const charImageList = async () => {
  try {
    const URL_ALL = `https://api.got.show/api/show/characters/`;
    const allCharObj = await axios.get(URL_ALL);
    // for (let i = 0; i < allCharObj.data.length; i++) {
    //   let image = document.createElement('img')
    //   image.src = allCharObj.data[i].image;
    //   console.log(i, allCharObj.data[i].name);
    //   image.onload = function () {

    //     console.log(i, 'image loaded');
    //   }
    //   image.onerror = function (error) {
    //     console.error(`this image didnt load`, i)
    //   }
    // }
    // console.log(allCharObj.data);
    return allCharObj.data;
  } catch (error) {
    console.error(`you have an error${error}`)
  }
}
//charImageList();

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
  let x;       //correct image index
  for (let i = 0; i < img.length; i++) {
    // console.log(data.image === img[i].src);
    //console.log(data.image);
    if (data.image == img[i].src) {
      img[i].classList.add("largeImg");
      let parentAside = img[i].parentElement;
      parentAside.classList.add('width-auto');
      if (parentAside.id === 'imgs1') {
        document.querySelector('#imgs2').classList.add("width-0");
      } else {
        document.querySelector('#imgs1').classList.add("width-0");
      }
      x = i;
    } else {
      img[i].classList.add("smallImg");
      img[i].style.opacity = "0";
      setTimeout(() => { img[i].style.display = 'none'; }, 200);
    }
  }
  console.log("correct answer?", correct);
  if (correct) {
    document.querySelector('p').innerHTML = `CORRECT!!<br>It was <b>${data.name}</b> sffsdf sdfdsfsd sdf sdfsd fsdfdsfsd fdsfsdfsd fsdfdsf sf sdf ds fsdfsdfsdfsdfsdf s sdf`
    score += 1;
    document.querySelector('#score').innerText = score;
    //console.log(img[x].classList);
  } else {
    document.querySelector('p').innerHTML = `INCORRECT!!<br>It was <b>${data.name}</b> sffsdf sdfdsfsd sdf sdfsd fsdfdsfsd fdsfsdfsd fsdfdsf sf sdf ds fsdfsdfsdfsdfsdf s sdf`
    score -= 1;
    document.querySelector('#score').innerText = score;
    //console.log(img[x].classList);
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
    //console.log(response, `this is ther name ${name}`);
    //console.log(choiceArr);
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

    const allChar = await charImageList();
    for (let i = 0; i < img.length; i++) {
      let image = img[i];
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
        // x cannot equal 146 or 97 because the image links are broken
        // also checking for missing image keys and duplicates
        if (isDup !== true && ('image' in allChar[x]) && !(allChar[x].image == '') && (x != 146 || x != 97)) {
          image.src = allChar[x].image;
          choiceArr[i] = allChar[x];
          // calling the fuction to update score and display the appropriate text when wrong
          image.addEventListener('click', () => {
            answer(response.data, false);
          });
          //}

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
    delete choiceArr[i];
    document.querySelector('#imgs1').classList.remove('width-auto', 'width-0');
    document.querySelector('#imgs2').classList.remove('width-auto', 'width-0');
    // have to delete the img elemtents and recreate them to clear all the eventListeners. 
    // Trust me this is the fastest way
    let newImg = document.createElement('img');
    newImg.style.opacity = "0";
    img[i].style.opacity = "0";
    img[i].parentElement.append(newImg);
    img[i].remove();
    // opacity is 0 at this point so making the display visible is OK
    newImg.style.display = "block";
    console.log(newImg);
  }
  //console.log('choiceArr', choiceArr);
  //fading the images and clears them
  document.querySelector('#quote').style.opacity = "0";
  const data = await randomQuote();
  displayQuote(data);
  checkChar(data);
  if (document.querySelector('#button').innerText !== 'click to start') {
    document.querySelector('#button').innerText = 'next quote';
  }
}

document.querySelector('#button').addEventListener('click', nextQuote);
