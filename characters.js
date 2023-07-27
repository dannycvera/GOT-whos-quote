const characterMap = {
        "Daenerys Targaryen": 0,
        "Samwell Tarly": 1,
        "Jon Snow": 2,
        "Arya Stark": 3,
        "Sansa Stark": 4,
        "Bran Stark": 5,
        'Eddard "Ned" Stark': 6,
        "Robert Baratheon": 7,
        "Jaime Lannister": 8,
        "Cersei Lannister": 9,
        "Catelyn Stark": 10,
        "Rob Stark": 11,
        "Theon Greyjoy": 12,
        "Joffrey Baratheon": 13,
        "Tyrion Lannister": 14,
        "The Hound": 15,
        "Petyr Baelish": 16,
        "Davos Seaworth": 17,
        "Stannis Baratheon": 18,
        "Lord Varys": 19,
        "Khal Drogo": 20,
        "Margaery Tyrell": 21,
        "Ygritte": 22,
        "Brienne of Tharth": 23,
        "Missandei": 24,
        "Gilly": 25,
        "Viserys Targaryn": 26,
        "Rickon Stark": 27,
        "Roose Bolton": 28,
        "Daario": 29,
        "Shae": 30,
        "Tommen Baratheon": 31,
        "Gendry Baratheon": 32,
        "Jorah Mormont": 33,
        "Robert Baratheon": 34,
        "Ramsay Bolton": 35,
        "Talisa Stark": 36,
        "Jeor Mormont": 37,
        "The High Sparrow": 38,
        "Oberyn Martell": 39,
        "Melisandre": 40,
        "Jaqen H'ghar": 41,
        "Tywin Lannister": 42,
        "Ellaria Sand": 43,
        "Tormund": 44,
        "Yara Greyjoy": 45,
        "Euron Greyjoy": 46,
        "Hodor": 47,
        "Pycelle": 48,
        "Grey Worm": 49,
        "Olenna Tyrell": 50,
        "Qyburn": 51,
        "Lord Bronn": 52,
        "Aerys II Targaryen": 53,
        "Aemon Targaryen": 54,
        "Mance Rayder": 55,
    };

const characterData = [
        {
            "id": 0,
            "firstName": "Daenerys",
            "lastName": "Targaryen",
            "fullName": "Daenerys Targaryen",
            "title": "Mother of Dragons",
            "family": "House Targaryen",
            "image": "daenerys.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg",
            "gender": "famale",
            "alive": false,
        },
        {
            "id": 1,
            "firstName": "Samwell",
            "lastName": "Tarly",
            "fullName": "Samwell Tarly",
            "title": "Maester",
            "family": "House Tarly",
            "image": "sam.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/sam.jpg",
            "gender": "male",
            "alive": true,
        },
        {
            "id": 2,
            "firstName": "Jon",
            "lastName": "Snow",
            "fullName": "Jon Snow",
            "title": "King of the North",
            "family": "House Stark",
            "image": "jon-snow.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/jon-snow.jpg",
            "gender": "male",
            "alive": true,
        },
        {
            "id": 3,
            "firstName": "Arya",
            "lastName": "Stark",
            "fullName": "Arya Stark",
            "title": "No One",
            "family": "House Stark",
            "image": "arya-stark.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/arya-stark.jpg",
            "gender": "famale",
            "alive": true,
        },
        {
            "id": 4,
            "firstName": "Sansa",
            "lastName": "Stark",
            "fullName": "Sansa Stark",
            "title": "Lady of Winterfell",
            "family": "House Stark",
            "image": "sansa-stark.jpeg",
            "imageUrl": "https://thronesapi.com/assets/images/sansa-stark.jpeg",
            "gender": "famale",
            "alive": true,
        },
        {
            "id": 5,
            "firstName": "Brandon",
            "lastName": "Stark",
            "fullName": "Brandon Stark",
            "title": "Lord of Winterfell",
            "family": "House Stark",
            "image": "bran-stark.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/bran-stark.jpg",
            "gender": "male",
            "alive": true,
        },
        {
            "id": 6,
            "firstName": "Eddard",
            "lastName": "Stark",
            "fullName": "Eddard Stark",
            "title": "Lord of Winterfell",
            "family": "House Stark",
            "image": "ned-stark.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/ned-stark.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 7,
            "firstName": "Robert",
            "lastName": "Baratheon",
            "fullName": "Robert Baratheon",
            "title": "Lord of the Seven Kingdoms",
            "family": "House Baratheon",
            "image": "robert-baratheon.jpeg",
            "imageUrl": "https://thronesapi.com/assets/images/robert-baratheon.jpeg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 8,
            "firstName": "Jamie",
            "lastName": "Lannister",
            "fullName": "Jamie Lannister",
            "title": "Lord Commander of the Kingsguard",
            "family": "House Lannister",
            "image": "jaime-lannister.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/jaime-lannister.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 9,
            "firstName": "Cersei",
            "lastName": "Lannister",
            "fullName": "Cersei Lannister",
            "title": "Lady of Casterly Rock",
            "family": "House Lannister",
            "image": "cersei.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/cersei.jpg",
            "gender": "famale",
            "alive": false,
        },
        {
            "id": 10,
            "firstName": "Cateyln",
            "lastName": "Stark",
            "fullName": "Catelyn Stark",
            "title": "Lady of Winterfell",
            "family": "House Stark",
            "image": "catelyn-stark.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/catelyn-stark.jpg",
            "gender": "famale",
            "alive": false,
        },
        {
            "id": 11,
            "firstName": "Robb",
            "lastName": "Stark",
            "fullName": "Rob Stark",
            "title": "Lord of Winterfell",
            "family": "House Stark",
            "image": "robb-stark.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/robb-stark.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 12,
            "firstName": "Theon",
            "lastName": "Greyjoy",
            "fullName": "Theon Greyjoy",
            "title": "Captain of Sea Bitch",
            "family": "House Greyjoy",
            "image": "theon.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/theon.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 13,
            "firstName": "Joffrey",
            "lastName": "Baratheon",
            "fullName": "Joffrey Baratheon",
            "title": "Lord of the Seven Kingdoms, Protector of the Realm",
            "family": "House Lanister",
            "image": "joffrey.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/joffrey.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 14,
            "firstName": "Tyrion",
            "lastName": "Lannister",
            "fullName": "Tyrion Lannister",
            "title": "Hand of the Queen",
            "family": "House Lanister",
            "image": "tyrion-lannister.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/tyrion-lannister.jpg",
            "gender": "male",
            "alive": true,
        },
        {
            "id": 15,
            "firstName": "Sandor",
            "lastName": "Clegane",
            "fullName": "The Hound",
            "title": "The Hound",
            "family": "House Clegane",
            "image": "the-hound.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/the-hound.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 16,
            "firstName": "Petyr",
            "lastName": "Baelish",
            "fullName": "Petyr Baelish",
            "title": "Littlefinger",
            "family": "House Baelish",
            "image": "littlefinger.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/littlefinger.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 17,
            "firstName": "Davos",
            "lastName": "Seaworth",
            "fullName": "Davos Seaworth",
            "title": "Hand of the King",
            "family": "House Seaworth",
            "image": "davos-seaworth.png",
            "imageUrl": "https://thronesapi.com/assets/images/davos-seaworth.png",
            "gender": "male",
            "alive": true,
        },
        {
            "id": 18,
            "firstName": "Stannis",
            "lastName": "Baratheon",
            "fullName": "Stannis Baratheon",
            "title": "Lord of Dragonstone",
            "family": "House Baratheon",
            "image": "stannis.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/stannis.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 19,
            "firstName": "Varys",
            "lastName": "Unknown",
            "fullName": "Varys",
            "title": "Master of Whisperers",
            "family": "Unknown",
            "image": "varys.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/varys.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 20,
            "firstName": "Khal",
            "lastName": "Drogo",
            "fullName": "Khal Drogo",
            "title": "Khal",
            "family": "House Targaryen",
            "image": "khal-drogo.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/khal-drogo.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 21,
            "firstName": "Margaery",
            "lastName": "Tyrell",
            "fullName": "Margaery Tyrell",
            "title": "Queen of the Seven Kingdoms",
            "family": "House Tyrell",
            "image": "margaery-tyrell.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/margaery-tyrell.jpg",
            "gender": "female",
            "alive": false,
        },
        {
            "id": 22,
            "firstName": "Ygritte",
            "lastName": "None",
            "fullName": "Ygritte",
            "title": "Spearwife",
            "family": "Free Folk",
            "image": "ygritte.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/ygritte.jpg",
            "gender": "female",
            "alive": false,
        },
        {
            "id": 23,
            "firstName": "Brienne",
            "lastName": "Tarth",
            "fullName": "Brienne of Tarth",
            "title": "Lady Brienne",
            "family": "Tarth",
            "image": "brienne-tarth.jpeg",
            "imageUrl": "https://thronesapi.com/assets/images/brienne-tarth.jpeg",
            "gender": "female",
            "alive": true,
        },
        {
            "id": 24,
            "firstName": "Missandei",
            "lastName": "None",
            "fullName": "Missandei",
            "title": "Queen's Personal Advisor",
            "family": "Naathi",
            "image": "missandei.jpeg",
            "imageUrl": "https://thronesapi.com/assets/images/missandei.jpeg",
            "gender": "female",
            "alive": false,
        },
        {
            "id": 25,
            "firstName": "Gilly",
            "lastName": "None",
            "fullName": "Gilly",
            "title": "The Rabbit Keeper",
            "family": "None",
            "image": "gilly.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/gilly.jpg",
            "gender": "female",
            "alive": true,
        },
        {
            "id": 26,
            "firstName": "Viserys",
            "lastName": "Targaryan",
            "fullName": "Viserys Targaryn",
            "title": "King Viserys III",
            "family": "Targaryan",
            "image": "viserys-targaryan.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/viserys-targaryan.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 27,
            "firstName": "Rickon",
            "lastName": "Stark",
            "fullName": "Rickon Stark",
            "title": "Prince",
            "family": "Stark",
            "image": "rickon.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/rickon.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 28,
            "firstName": "Roose",
            "lastName": "Bolton",
            "fullName": "Roose Bolton",
            "title": "Lord of Dreadfort",
            "family": "Bolton",
            "image": "roose-bolton.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/roose-bolton.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 29,
            "firstName": "Daario",
            "lastName": "Naharis",
            "fullName": "Daario",
            "title": "Commander of the Second Sons",
            "family": "Naharis",
            "image": "daario.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/daario.jpg",
            "gender": "male",
            "alive": true,
        },
        {
            "id": 30,
            "firstName": "Shae",
            "lastName": "",
            "fullName": "Shae",
            "title": "Mistress",
            "family": "Lorathi",
            "image": "shae.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/shae.jpg",
            "gender": "female",
            "alive": false,
        },
        {
            "id": 31,
            "firstName": "Tommen",
            "lastName": "Baratheon",
            "fullName": "Tommen Baratheon",
            "title": "Prince",
            "family": "Baratheon",
            "image": "tommen.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/tommen.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 32,
            "firstName": "Gendry",
            "lastName": "Baratheon",
            "fullName": "Gendry Baratheon",
            "title": "Lord of Storm's End",
            "family": "Baratheon",
            "image": "gendry.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/gendry.jpg",
            "gender": "male",
            "alive": true,
        },
        {
            "id": 33,
            "firstName": "Jorah",
            "lastName": "Mormont",
            "fullName": "Jorah Mormont",
            "title": "Knight",
            "family": "Mormont",
            "image": "jorah-mormont.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/jorah-mormont.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 34,
            "firstName": "Robert",
            "lastName": "Baratheon",
            "fullName": "Robert Baratheon",
            "title": "King",
            "family": "Baratheon",
            "image": "king-robert.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/king-robert.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 35,
            "firstName": "Ramsey",
            "lastName": "Bolton",
            "fullName": "Ramsey Bolton",
            "title": "The Bastard of Bolton",
            "family": "Bolton",
            "image": "ramsey-bolton.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/ramsey-bolton.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 36,
            "firstName": "Talisa",
            "lastName": "Stark",
            "fullName": "Talisa Stark",
            "title": "Queen Consort",
            "family": "Stark",
            "image": "talisa-stark.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/talisa-stark.jpg",
            "gender": "female",
            "alive": false,
        },
        {
            "id": 37,
            "firstName": "Jeor",
            "lastName": "Mormont",
            "fullName": "Jeor Mormont",
            "title": "Lord Commander of the Knight's Watch",
            "family": "Mormont",
            "image": "lord-commander-mormont.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/lord-commander-mormont.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 38,
            "firstName": "The High",
            "lastName": "Sparrow",
            "fullName": "The High Sparrow",
            "title": "High Septon",
            "family": "Sparrow",
            "image": "the-high-sparrow.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/the-high-sparrow.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 39,
            "firstName": "Oberyn",
            "lastName": "Martell",
            "fullName": "Oberyn Martell",
            "title": "Red Viper of Dorne",
            "family": "Viper",
            "image": "red-viper.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/red-viper.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 40,
            "firstName": "Melisandre",
            "lastName": "The Red Woman",
            "fullName": "Melisandre",
            "title": "Melisandre of Asshai",
            "family": "Unkown",
            "image": "melisandre.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/melisandre.jpg",
            "gender": "female",
            "alive": false,
        },
        {
            "id": 41,
            "firstName": "Jaqen",
            "lastName": "H'ghar",
            "fullName": "Jaqen H'ghar",
            "title": "Faceless Men of Braavos",
            "family": "Lorath",
            "image": "jaqen-hghar.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/jaqen-hghar.jpg",
            "gender": "male",
            "alive": true,
        },
        {
            "id": 42,
            "firstName": "Tywin",
            "lastName": "Lannister",
            "fullName": "Tywin Lannister",
            "title": "Lord Paramount of Westerlands",
            "family": "Lannister",
            "image": "tywin-lannister.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/tywin-lannister.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 43,
            "firstName": "Ellaria",
            "lastName": "Sand",
            "fullName": "Ellaria Sand",
            "title": "Paramour of Prince Oberyn Martell",
            "family": "Sand",
            "image": "ellaria-sand.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/ellaria-sand.jpg",
            "gender": "female",
            "alive": false,
        },
        {
            "id": 44,
            "firstName": "Tormund",
            "lastName": "Giantsbane",
            "fullName": "Tormund Giantsbane",
            "title": "Free Folk Warrior",
            "family": "Free Folk",
            "image": "tormund-giantsbane.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/tormund-giantsbane.jpg",
            "gender": "male",
            "alive": true,
        },
        {
            "id": 45,
            "firstName": "Yara",
            "lastName": "Greyjoy",
            "fullName": "Yara Greyjoy",
            "title": "Lady of the Iron Islands",
            "family": "Greyjoy",
            "image": "yara-greyjoy.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/yara-greyjoy.jpg",
            "gender": "female",
            "alive": true,
        },
        {
            "id": 46,
            "firstName": "Euron",
            "lastName": "Greyjoy",
            "fullName": "Euron Greyjoy",
            "title": "King of the iron Islands",
            "family": "Greyjoy",
            "image": "euron-greyjoy.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/euron-greyjoy.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 47,
            "firstName": "Wylis",
            "lastName": "Hodor",
            "fullName": "Hodor",
            "title": "Servant of House Stark",
            "family": "Stark",
            "image": "hodor.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/hodor.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 48,
            "firstName": "",
            "lastName": "Pycelle",
            "fullName": "Pycelle",
            "title": "Grand Maester of the Seven Kingdoms",
            "family": "",
            "image": "pycelle.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/pycelle.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 49,
            "firstName": "Grey",
            "lastName": "Worm",
            "fullName": "Grey Worm",
            "title": "Commander of the Unsullied",
            "family": "Worm",
            "image": "greyworm.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/greyworm.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 50,
            "firstName": "Olenna",
            "lastName": "Tyrell",
            "fullName": "Olenna Tyrell",
            "title": "Queen of Thorns",
            "family": "Tyrell",
            "image": "olenna-tyrell.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/olenna-tyrell.jpg",
            "gender": "female",
            "alive": false,
        },
        {
            "id": 51,
            "firstName": "Qyburn",
            "lastName": "Grand Maester",
            "fullName": "Qyburn",
            "title": "Former maester of the Citadel",
            "family": "Qyburn",
            "image": "qyburn.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/qyburn.jpg",
            "gender": "male",
            "alive": true,
        },
        {
            "id": 52,
            "firstName": "Lord",
            "lastName": "Bronn",
            "fullName": "Lord Bronn",
            "title": "Lord of Highgarden",
            "family": "Bronn",
            "image": "bronn.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/bronn.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 53,
            "firstName": "Aerys II",
            "lastName": "Targaryen",
            "fullName": "Aerys II Targaryen",
            "title": "The Mad King",
            "family": "House Targaryen",
            "image": "Aerys_II_Targaryen_Mad_King.jpg",
            "imageUrl": "https://static.wikia.nocookie.net/gameofthrones/images/4/47/Aerys_II_Targaryen_Mad_King.jpg",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 54,
            "firstName": "Aemon",
            "lastName": "Targaryen",
            "fullName": "Aemon Targaryen",
            "title": "Maester",
            "family": "House Targaryen",
            "image": "Aemonepisode5.png",
            "imageUrl": "https://static.wikia.nocookie.net/gameofthrones/images/3/32/Aemonepisode5.png",
            "gender": "male",
            "alive": false,
        },
        {
            "id": 54,
            "firstName": "Mance",
            "lastName": "Rayder",
            "fullName": "Mance Rayder",
            "title": "The King-Beyond-the-Wall",
            "family": "Unkown",
            "image": "GOT_Season_5_10.jpg",
            "imageUrl": "https://static.wikia.nocookie.net/gameofthrones/images/1/17/GOT_Season_5_10.jpg",
            "gender": "male",
            "alive": false,
        },
    ];