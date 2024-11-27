# Ultimate Rock Papar Scissors

This website is a fun game that I used to play with friends which is an advanced version of rock paper scissors which adds many new choices for the player and is more fun than original rock paper scissors.

This website is made for game enthusiasts and people that enjoy learning new versions of classic games.

![image](https://github.com/user-attachments/assets/39d47386-772c-4d6b-a8ce-cd6b6d2ee863)


## Features

- ### DropDown Bar
  - Featured at the top center of the screen when you first load the website is a dropdown which allows the user to select the amount of rounds they want to play
  - The user can pick to play 1 to 8 rounds.
  - The dropdown menu has been styled to appeal to a wide audiance and allows the user to clearly see the option from the backdrop

![image](https://github.com/user-attachments/assets/09a6ff45-ec89-429f-9fc6-f2f1dabcfd0d)



- ### Game Buttons
-   The Game buttons are clear and consise easily allowing the user to see exactly which option they are picking
-   The colors were chosen to allow the buttons to pop in contrast to the background, I also added a glow to the buttons to make them more appealing
-   The Buttons also include emojis to give the game a more modern look and brings out the character of each option.

![image](https://github.com/user-attachments/assets/18ad0608-d3df-448b-97b3-efa689cddc47)


- ### Player And Computer Score
-   Underneath the game buttons is a player score which allows the user to track their score easily
-   The score section also has a space for the computers score which allows the user to see if they are winning or losing
-   The Score appears in green to the user and red for the computer to easily differenciate the 2 different scores
  
![image](https://github.com/user-attachments/assets/bd02db87-d341-4d96-b293-2b4c0aabf439)

- ### Player And Computer Choices
-   Just above the score area there is an area which show the user what they picked and what the computer picked for their options
-   This allows the user to see which option win against others allowing them to pick up on the rules easier
  
![image](https://github.com/user-attachments/assets/bc90dc1b-5268-43e2-8e8e-2350c9686c46)

- ### Play Again Button
-   When the player has completed all the rounds they selected, the play again button will appear
-   This button allows the player to return to the start of the game and try again, the player can re-select the amount of rounds that they want to do
-   The Button has simialar styling to the other so the user can easily understand that is in an interactible object	
  
![image](https://github.com/user-attachments/assets/d7a18db6-0d7a-471d-aa26-c8a21d23bd3d)


## Testing

 - I tested that this page works in different browsers: Edge, Firefox Chrome, Safari and OperaGX
 - I confirmed that this project is responsive, looks good and functions on all standard screen sizes using the devtools in chrome and edge.
 - I confirmed that all text is easy to read and has correct spelling and grammar in places where needed.
 - I have confimed that all buttons fucntion as intended.

## Bugs

- There was a bug where the text for the result did not update to green or red when the user won or lost and would remain one color
- I fixed this by making the red-Text and green-Text class which gets removed and added when needed
  
- There was another bug with the remaining rounds not updating when the user got a tie
- This bug was fixed by changing where remaing rounds gets updated which meant that the update happened everytime the buttons were clicked
  
- Another bug was that the select bar was larger than the screen size when on small screen sizes
- I fixed this by setting the select bar to 75% width which ensured that the bar remained at a good size no matter the screen size
  
## Validator Testing

- Html
-   No errors were returned when passing through the official W3C Validator
![image](https://github.com/user-attachments/assets/72a646cb-0d4d-4691-b28b-0812ac7f53cb)

- CSS
-   No errors were returned when passing throuhg the official Jigsaw CSS Validator
![image](https://github.com/user-attachments/assets/14a6433f-094b-4030-9b28-562658acfabe)

- Accessibility
-   I confirmed that the colors and fonts chose are easy to read and accessible by running it through lighthouse in devtools
![image](https://github.com/user-attachments/assets/64ec904d-5189-4f84-9fd6-3786fd2f4215)

## Deployment
- This site was deployed to Github pages. The steps to deploy are as follows:
-   Navigate to the setting tab of the GitHub repository that you wish to deploy
-   From the source drop down menu, select the option that says main
-   Once selected the pages link will generate allowing you to view your page.

The Live link to this repository can be found here - https://lewisbull2303.github.io/Portfolio/#



