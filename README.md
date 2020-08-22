# Retro Mario Match

### MS2 -Interactive Frontend Development - Code Institute

This project is a memory card game Super Mario theme based. The idea is that the user will match all the card pairs in order to finish the game. There is a time limit of 60 seconds and a score of 1000 points to which every click deducts 20 points. 

## Demo

Click <a href="https://mendesfsweden.github.io/MilestoneProject2/">here</a> for a live demo version of this project.

<img src="assets/images/demo.png" width="1000" height="400">

## User Experience (UX)

  * User Stories
  
    * First Time User Goals
        
       <ol start="a">
         <li>As a First Time User, i want to easily understand the purpose of the game.</li>
         <li>As a First Time User, i want to easily understand how to start the game.</li>
         <li>As a First Time User, i want to be able to restart the game at any giver moment.</li>
         <li>As a First Time User, i want to have access to the time a have left to complete the game.</li>
         <li>As a First Time User, i want to have access to the score at all times.</li>
         <li>As a First Time User, i want to be able to mute/unmute the sound in the game.</li>
       </ol>
    

Focus on providing the user a way to train his/her memory skills by playing a memory card game. The project is easy to navigate through and it has a simple and attractive layout, as well as an option to listen (or not) to the well known super mario soundtrack song.

## User Stories

<ul>
  <li>As a user, i have a start button the allows me to initialize the game.</li>
  <li>As a user, i have access to the current time left to play as well as the score, at all times.</li>
  <li>As a user, i have access to a button that allows me to restart the game at any time.</li>
  <li>As a user, i have the possibility the mute and, consequently, unmute the sound by clicking on the mute/unmute button during the game.</li>
  <li>As a user, i can restart the game immediatelly after i win or lose as there is a restart button available on both win and game over screens.</li>
  
</ul>

### Strategy

The objective is to collect the most pairs of cards. When a player turns over two cards that do not match, those cards are turned face down again (in the same position). The trick is to remember which cards are where.

### Scope

The goal is to provide the user a way to train his/her memory skills through a fun and interactive experience. 

### Structure 

It's a single page project. All the game information is available to user at all times (time left, score, buttons to restart and mute/unmute). 
In addition, there are three different cover screens. One once the game is loaded(start screen, that also includes a start button), one once the user wins(win screen) and one once the user loses(game over screen). Both the win and game over screens have a button to restart the game.

### Skeleton 

The following wireframes for this projects were developed with <a href="https://www.figma.com/">Figma</a>:

<a href="https://github.com/mendesfsweden/MilestoneProject2/blob/master/assets/mockups/Desktop.pdf">Desktop Version</a><br>
<a href="https://github.com/mendesfsweden/MilestoneProject2/blob/master/assets/mockups/Mobile.pdf">Mobile Version</a>

### Surface

The red color used is one of the super mario colors. The grey color on the card front (when flipped) intends to make it easier for the user to identify the cards left to match. As the colors of the characters are all very similar it would easy to get confused once only a few pairs would be left to match (if using black as the card back).
The font-family "Press Start 2P" was picked to give the game a retro aspect. 

## Technologies Used

<ul>
  <li>HTML - was used create the website structure</li>
  <li>CSS - was used to style the HTML</li>
  <li>JavaScript - was used for the website interactiveness</li>
  <li>Figma - was used to create the wireframes</li>
</ul>
  
## Features

The user is able to restart the game at any moment as well as disable/enable the sound, by clicking on the "Restart" and "Mute"/"Unmute" buttons, respectively.
The remaining playing time and score are visible at all times. 
Once the user loses or wins the game there are buttons available to restart the game. 

### Features Left To Implement

Create different dificulty levels. 

## Testing

This project was tested on Chrome, Safari, Edge, Brave, iOS devices (iPhone Xs and Ipad) and Android. All functionalities work as expected.
It does not work properly on Internet Explorer.

#### HTML/CSS Validation

<a href="https://validator.w3.org/" target="_blank">W3C HTML Validator:<a/> Used it to check the site's HTML document markup validity and it's functionality.<br> 
<a href="https://jigsaw.w3.org/css-validator/" target="_blank">W3C CSS Validator:<a/> Used it to check the site's CSS document markup validity and it's functionality. 

## Deployment
 
The project is hosted at GitHub, directly from the master branch. For that reason, any new changes committed will be deployed automatically.

## Credits

### Media

All images are from the free stock image library <a href="https://www.pngguru.com/" target="_blank">pngGuru</a>.

### Acknowledgements

Retro Mario Match was inspired on this GitHub repository <a href="https://github.com/portexe/Mix-Or-Match/" target="_blank">link</a>.
