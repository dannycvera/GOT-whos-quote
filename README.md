# Project Overview

## Game Of Thrones Quote Game

## Project Description

Which character from Game of Thrones is the author of the random quote?
There will be four images to choose from, but no names.

Whether you choose wrong or right the image of the correct character will move to the center, 
clearing the other characters from the screen with more information about the correct character next to it.
Name, Title(s), Whether they are still alive or not, alegiances, culture and religion will all be shown.

## API and Data Sample

Two API's will be used.
The first will be from https://gameofthronesquotes.xyz/ to retrieve the quote and name of the character.
Below is an example of a JSON request:
```
{
    "sentence": "Three victories don't make you a conqueror.",
    "character": {
        "name": "Jaime Lannister",
        "house": {
            "name": "House Lannister of Casterly Rock",
            "slug": "lannister"
        }
    }
}
```

The Second will be from https://api.got.show/doc/
This database will retrieve the portrait and other information about the character.
I can retrieve individual characters or the entire list if necessary.
Below is an example of the JSON output

```
{
    "titles": [
        "Lord of Winterfell",
        "Lord Paramount of the North",
        "Warden",
        "The North",
        "Hand of the King",
        "Robert Baratheon",
        "Joffrey Baratheon",
        "Regent",
        "Joffrey Baratheon",
        "Protector of the Realm",
        "Joffrey Baratheon"
    ],
    "origin": [
        "Winterfell",
        "The Eyrie"
    ],
    "siblings": [
        "Brandon Stark ",
        "Lyanna Stark",
        "Benjen Stark"
    ],
    "spouse": [
        "Catelyn Tully"
    ],
    "lovers": [],
    "plod": 0,
    "longevity": [],
    "plodB": 0,
    "plodC": 0,
    "longevityB": [],
    "longevityC": [],
    "culture": [
        "Northmen"
    ],
    "religion": [
        "Old Gods of the Forest"
    ],
    "allegiances": [
        "House Stark",
        "House Baratheon of King's Landing"
    ],
    "seasons": [],
    "appearances": [
        "Winter Is Coming",
        "The Kingsroad",
        "Lord Snow",
        "Cripples, Bastards, and Broken Things",
        "The Wolf and the Lion",
        "A Golden Crown",
        "You Win or You Die",
        "The Pointy End",
        "Baelor"
    ],
    "_id": "5cc0757c04e71a0010b86ac3",
    "name": "Eddard Stark",
    "slug": "Eddard_Stark",
    "image": "https://vignette.wikia.nocookie.net/gameofthrones/images/3/37/Eddard_Stark_infobox_new.jpg/revision/latest/scale-to-width-down/323?cb=20160730050722",
    "gender": "male",
    "alive": false,
    "death": 298,
    "father": "Rickard Stark",
    "house": "House Stark",
    "first_seen": "Winter Is Coming\"",


```


## Wireframes

Portrait and Landscape wire frame can be accessed at the link below.
When folling the link, in the top menu bar towards the left, please change between portrait and landscape to see each view.

[WireFrame](https://wireframe.cc/pro/pp/37d79e370358447)

### MVP/PostMVP

#### MVP 

- Will use two API's. One to retrieve a random Quote, the second wll be used to cross reference the character image, name and info with the aurthor of the random quote.
- Display three other random images which will be wrong answers. This will be retrieved from the https://api.got.show/doc/ API.
- The user will choose between four difference character images. If they guess the author of the quote correctly then their score will increase.
- Will render the application as a mobile first portrait app.

#### PostMVP  

- Will render the site in landscape when the user changes orientation.
- Add transition effects and animations when images are removed from the screen.
- Use local storage to save the users progress and avoiding duplicate quotes.
- Quotes from Multiple TV Series such as Breaking Bad and Movies as well

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|July 13| Project Approval | Completed
|July 13| Core Application Structure (HTML, CSS, etc.) | Completed
|July 14| Pseudocode / Javascript functionality | Completed
|July 14| Fine tune interface and functionality | Complete
|July 16| MVP | Complete
|July 17| Presentations | Incomplete

## Priority Matrix

[Game of Thones - Quotes Game - Priority Matrix](https://drive.google.com/file/d/1P-szTdfHkvSx0QuheiR16Mbh2ClpsTqH/view?usp=sharing)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Structure | H | 2hrs| 2.5hrs | 0hrs |
| CSS| H | 5hrs| 6hrs | 0hrs |
| Working with API | H | 4hrs| 6hrs | 0hrs |
| Javascript(random character image) | H | 4hrs| 4hrs | 0hrs |
| Javascript(scoring system) | H | 4hrs| 3hrs | 0hrs |
| PMVP - Change Layout to landscape | M | 4hrs| 4.5hrs | 0hrs |
| CSS/JS - transition effects | L | 3hrs| 3hrs | 0hrs |
| Local Storage for scores | L | 4hrs| 0hrs | 0hrs |
| Total | H | 30hrs| 29hrs | 0hrs |

## Code Snippet

TBA

## Change Log

TBA
