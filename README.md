# Introduction.

>In this project, I want to create a gamebook app in a medieval-fantasy world where the user takes the role of a young wizard that has to set off on a journey to complete his quest. He has to make decisions along with the story and based on those decisions the player will find different endings of the story.
>
>This project was created based on another previous project that was coded in an imperative way using JavaScript. I intend to recreate the same project using React as a way to get a better understanding of this library.

## Structure

> The app is made of the following main components:




   - **HeroStatusBar.** update the changes and choices of the user.It will keep track of the character conditions along the game.It will contain:
     - characters name.
     - object and spell chosen.
     - life points (to be added)

   - __NarrativeBlock.__ Describe the event of the story. It will contain:
     - Title of the chapter/events/etc.
     - Description of the story.
     - images:
          - Content component.this section will change the 

   - **ActionBar.** All the user options will be display in here.
   - **SelectItemCard.** Use to select an object and a spell at the begining of the adventure.
   - **Modal.** Use to describe the items.

>Because of the complexity of the project is better to have a look at the following map tree to understand how the components are connected in the app:


- **App:**
- HeroStatusBar.
     - IconCard
- NarrativeBlock:
     - ImageCard
     - ImageCard
     - ImageCard
- ActionBar.
           
- SelectItemCard   

- Modal  

## Plan of actions.
>When the user select an object and click the submit button and icon of that object have to appear in the Hero status bar, how? ==> __DONE__
- In SelectedItemComponent the value of the selection form has to be selected and the value it is store in a state.
- at the top level create a function that handel the path of th src of the image, it stores the path in a state.
>When selecting the object and click the submit button  it will changche the images of the objects and show the spells.
- SelectItemCard of the object will hide.
- add a SelectItemCard component. It will be hide until the button is click 
- add another Modal component for the spells
- ImageCard, decide if add three more or dynamically change the path of the images.




## Things that I have learnt.

>In this section, I want to keep track of the things I learnt while working on this project as a way to reflect my learning process.

- The way to pass data from child components to parent components is by using callback functions.
- To pass data between siblings components you have to use a combinantion of callback functions and props using a state.

- Keep update the map tree for reference. you can easily get loss how component are connected and it really useful to have it on hand when you are passing data between components.

-Creation of custom hooks, extract similar logic and avoid repeticion in the code. It makes the code cleaner.
custome hooks can be called inside other hooks.

