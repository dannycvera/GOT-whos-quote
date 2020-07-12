# Project Overview

## Game Of Thrones Quote Game

## Project Description

Which character from Game of Thrones is the author of the random quote?
There will be four images to choose from, but no names.

Whether you choose wrong or right the image of the correct character will move to the center, 
clearing the other characters from the screen with more information about the correct character next to it.
Name, Title(s), Alive?, Alegiances, culture and religion will all be shown.

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
I can retrieve individual characters or the entire list
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
When folling the link, in the upper right corner please change between portrait and landscape to see each view.

[WireFrame](https://wireframe.cc/pro/pp/37d79e370358447)

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Will use two API's. One to retrieve a random Quote, the second wll be used to cross reference the character image, name and info with the aurthor of the random quote.
- The user will choose beteen four difference character images. If they guess the author of the quote correctly then their scor will increase.
- Will render the application as a mobile first portrait app.

#### PostMVP  

- Will render the site in landscape when the user changes orientation.
- Add transition effects and animations when images are removed from the screen.
- Use local storage to save the users progress and avoiding duplicate quotes.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|July 13| Project Approval | Incomplete
|July 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|July 14| Pseudocode / actual code | Incomplete
|July 15| Initial Clickable Model  | Incomplete
|July 16| MVP | Incomplete
|July 17| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
