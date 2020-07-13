const randomQuote = async () => {
  const URL = `https://game-of-thrones-quotes.herokuapp.com/v1/random`;
  //const URL = `https://got-quotes.herokuapp.com/quotes`;
  try {
    const response = await axios.get(URL);
    console.log(response);
    //return response.data[0];
    return response.data;
  } catch (error) {
    console.error(`You have an error. Please clean it up ${error}`)
  }
}

const getCharacter = async (data) => {
  try {
    let name = data.character.name;
    console.log(name);

    // Fix database inconsistencies between quotes database and character data
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

    const charURL = `https://api.got.show/api/show/characters/${name}`;
    const charData = await axios.get(charURL);
    console.log(charData, `this is her name ${name}`);

    document.querySelector('#char1').src = charData.data.image;
    document.querySelector('#char1').style.opacity = "1";
  } catch (error) {
    console.error(`You have this nagging error ${error}`)
  }

}

const displayQuote = (data) => {

  document.querySelector('#quote').innerText = data.sentence;
  document.querySelector('#quote').style.opacity = "1.0";
  //document.querySelector('h3').innerText = data.character.name;
  //document.querySelector('h3').style.opacity = "1.0";
}

const nextQuoteChar = async () => {
  document.querySelector('#char1').style.opacity = "0";
  document.querySelector('#quote').style.opacity = "0";
  //document.querySelector('h3').style.opacity = "0";
  const data = await randomQuote();

  displayQuote(data);
  getCharacter(data);
}

//document.querySelector('#button').addEventListener('click', nextQuoteChar);
document.querySelector('#char1').addEventListener('click', nextQuoteChar);

