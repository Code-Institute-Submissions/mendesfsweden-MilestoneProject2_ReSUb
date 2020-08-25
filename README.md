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

    1. As a User, I want to easily understand the goal of the game.

        1. Once the site is loaded, the user is presented with the instructions and rules of the game.
        
    2. As a User, i want to easily understand how to start the game.
    
        1. Once the site is loaded, a "Start" button in presented to the user.

    3. As a User, i want to be able to restart the game at any giver moment.
    
        1. While playing, a "Restart" button is available to the user and it is located on the top right above the playing area. 
        2. The user can restart the game upon a loss or a victory by pressing the "Restart" available on both the Win and Game-Over screens. 


    4. As a User, i want to have access to the time i have left to complete the game.
    
        1. The user has access to the time left to play. A timer is located on the top left the playing area.
        
    5. As a User, i want to have access to my score.
    
        1. The user has access to the current score. The score counter is located on the top of the playing area.
        
    6. As a User, i want to be able to mute/unmute the sound in the game.
    
        1. The user can mute/unmute the sound by pressing the "mute/unmute" button (shows "mute" if the sound is ON, shows "unmute" if the sound is OFF) located on the top right of the playing area.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge, Brave and Safari browsers.
-   The website was viewed on a variety of devices such as MacBookAir, Huawei P30, Iphone XS and Ipad.
-   A large amount of testing was done to ensure that all the functionalities worked properly.
-   Friends and family members were asked to test the game in order to point out any bugs and/or user experience issues.

### Known Bugs

-   The Safari and Internet Explorer Browsers does not support some of the functionalities of the game. Once the game starts all the cards are faced up.
-   Tested the game using the Chrome browser as an alternative to the Safari browser on the iOS devices - iPhone XS, iPad and MacbookAir - and only on the MacBookAir the game ran without any issues. 
        Conclusion: the bug found occurs on the iPhone XS and Ipad no matter which browser is used (Safari, Chrome).
-   On smaller screens, the Win and Game-Over screens cover the score making it impossible for the user to see their final score. 

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Media

-   All images are from the free stock image library [pngGuru](https://www.pngguru.com/).

### Acknowledgements

-   My Mentor for continuous helpful feedback.

-   Retro Mario Match was inspired on this [GitHub repository](https://github.com/portexe/Mix-Or-Match/).










    

   

   

      





