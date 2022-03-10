# Heroe's Journey
A MVP app game inspired in gamebooks where the reader participates in the story by making choices. It was created as a personal project in a way to learn Reactjs, and help met to get a deep understanding of this library. 
## Installation.
Create a directory, clone this repository, and initialise the project.

```bash
git clone https://github.com/shuampi/react-christmas-project.git

npm install
```

## Description.

In this project, I wanted to create a gamebook app in a medieval-fantasy world where the user takes the role of a young wizard that has to set off on a journey to complete his quest. He has to make decisions along with the story and based on those decisions the player will find different endings of the story.
>
>This project was created based on a previous project that was coded in an imperative way using JavaScript.

When I started this project I faced the problems of the limitation of my knowledge of React, but it was a good experience to experiment with the characteristics of the library and I felt free to try new things. It was very rewarding to be able to create this app from scratch after solving countless problems in its development. The computational thinking approach was helpful to break down these problems into small ones that were easier to solve, and in the end to get the desired result. 


This project is far to be completly finish, and it is my intention to keep working on it expanding the storyline of the game, improving its design, refactoring the code, and implementing testing to make it more robust. 





## Lessons learnt.

>In this section, I want to keep track of the things I learnt while working on this project as a way to reflect my learning process.


- The way to pass data from child components to parent components is by using callback functions.
- To pass data between siblings components you have to use a combinantion of callback functions and props using a state.

- Keep update the map tree for reference. You can easily get loss how component are connected and it really useful to have it on hand when you are passing data between components.
- Creation of custom hooks, extract similar logic and avoid repeticion in the code. It makes the code cleaner,custome hooks can be called inside other hooks.

- useContext hook with useReducer helps to keep a tidy code and readeable. 

## Libraries 
I used sweat alert library to modify the alert windows.
https://github.com/t4t5/sweetalert
