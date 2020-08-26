<h1 align="center">Retro Mario Match</h1>

<h2 align="center"> MS2 -Interactive Frontend Development - Code Institute </h2>

[Click here for a live demo version of this project.](https://mendesfsweden.github.io/MilestoneProject2/)

This project is a memory card game Super Mario theme based. The idea is that the user will match all the card pairs in order to finish the game. There is a time limit of 60 seconds and a score of 1000 points to which every click deducts 20 points. 

<img src="assets/images/demo.png" width="1000" height="400">

## User Experience (UX)

-   ### User stories
    
    -   #### User Goals

        1. As a User, i want to easily understand the goal of the game.
        2. As a User, i want to easily understand how to start the game.
        3. As a User, i want to be able to restart the game at any giver moment.
        4. As a User, i want to have access to the time i have left to complete the game.
        5. As a User, i want to have access to my score.
        6. As a User, i want to be able to mute/unmute the sound in the game.
        
-   ### Design
    -   #### Colour Scheme
        -   The red color used is one of the super mario colors. The grey color on the card front (when flipped) intends to make it easier for the user to identify the cards left to match. As the colors of the characters are all very similar, the user would easily get confused once only a few pairs would be left to match (if using black as the card back).
    -   #### Typography
        -   The font-family "Press Start 2P" was picked to give the game a retro aspect. Sans Serif is the fallback font used in case the 'Press Start 2P' isn't being imported              into the project correctly
    -   #### Imagery
        -   All the images are characteres of Super Mario as it is the theme of the game.
        
-   ### Wireframes

    -   Desktop Version - [View](https://github.com/mendesfsweden/MilestoneProject2/blob/master/assets/mockups/Desktop.pdf)
      
    -   Mobile Version - [View](https://github.com/mendesfsweden/MilestoneProject2/blob/master/assets/mockups/Mobile.pdf) 

## Features

-   Responsive on all device sizes

-   The user is able to restart the game at any moment as well as disable/enable the sound, by clicking on the "Restart" and "Mute"/"Unmute" buttons, respectively.

-   The remaining playing time and score are visible on the top right corner of the game.

-   Once the user loses or wins the game there are buttons available to restart the game.

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Press Start 2P' font into the style.css file which is the font used in this project.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Figma:](https://figma.com/)
    - Figma was used to create the [wireframes](https://figma.com/) for this project.

## Testing

The two services used to validate the code in this project and to ensure there were no syntax errors were W3C Markup Validator and W3C CSS Validator.

-   [W3C Markup Validator](https://validator.w3.org/) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmendesfsweden.github.io%2FMilestoneProject2%2F)
-   [W3C CSS Validator](http://jigsaw.w3.org/css-validator/) - [Results](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmendesfsweden.github.io%2FMilestoneProject2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=)

### Testing User Stories from User Experience (UX)

-   #### User Goals

    1.  As a User, I want to easily understand the goal of the game.
        
        1. Once the site is loaded, the user is presented with the instructions and rules of the game.
    
    1. As a User, i want to easily understand how to start the game.
        
        1. Once the site is loaded, a "Start" button in presented to the user.
    
    1. As a User, i want to be able to restart the game at any giver moment.
        
        1. While playing, a "Restart" button is available to the user and it is located on the top right above the playing area. 
        2. The user can restart the game upon a loss or a victory by pressing the "Restart" available on both the Win and Game-Over screens. 
    
    1. As a User, i want to have access to the time i have left to complete the game.
        
        1. The user has access to the time left to play. A timer is located on the top left the playing area.
    
    1.  As a User, i want to have access to my score.
        
        1. The user has access to the current score. The score counter is located on the top of the playing area.
    
    1. As a User, i want to be able to mute/unmute the sound in the game.
        
        1. The user can mute/unmute the sound by pressing the "mute/unmute" button (shows "mute" if the sound is ON, shows "unmute" if the sound is OFF) located on the top right of the playing area.

### Further Testing

-   The project was tested on the following browsers: Google Chrome, Internet Explorer, Microsoft Edge, Brave and Safari.
-   The project was tested on the following devices: MacBookAir, Huawei P30, Iphone XS and Ipad.
-   Retro Mario Match was also tested by friends and family to obtain User feedback in order to detected any potencial issues regarding the game functionality and to improve User Experience.

### Known Bugs

-   The Safari and Internet Explorer browsers do not support some of the functionalities of the game. Once the game starts all the cards are faced up.
-   Tested the game using the Chrome browser as an alternative to the Safari browser on the iOS devices - iPhone XS, iPad and MacbookAir - and only on the MacBookAir the game ran without any issues. 
        Conclusion: the bug found occurs on the iPhone XS and Ipad no matter which browser is used (Safari, Chrome).
-   On smaller screens, the Win and Game-Over screens cover the score making it impossible for the user to see their final score. 

## Deployment

### GitHub Pages

I used the following procedure to deploy my project to GitHub pages: 

-  Logged in to Github and opened the repository pages.
-  Accessed the "Settings" and scrolled down to the source field. Then, changed the "Branch" to Master instead of "None". 
-  The page was automatically reloaded and by scrolling down to the "GitHub Pages" section I could verify that the project was published.

### Forking the GitHub Repository

Forking the GitHub repository allows other developers to make a copy and work on it without changing the original. As a developer, you can fork a repository as follows:

-  Access the repository and click on the "Fork" button(located at the top right corner of the page), and a copy of the original repository will be created in your own account.

### Making a Local Clone

To make a local Clone, do the following:

-  Open the repository and click on the green button saying "Code". By clicking on it a dropdown menu reveals the "Clone with HTTPS" link, which can then be copied.
-  Open Git Bash and change the directory to the desired working location for the clone. After that, use the `git clone` command and paste the link that was copied ealier. 

Below is an example of what is seen on screen when the clone is being created:


```
$ git clone https://github.com/USERNAME/REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

## Credits

### Media

-   All images are from the free stock image library [pngGuru](https://www.pngguru.com/).

### Acknowledgements

-   My Mentor for continuous helpful feedback.

-   Retro Mario Match was inspired on this [GitHub repository](https://github.com/portexe/Mix-Or-Match/).










    

   

   

      





