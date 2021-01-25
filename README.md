For this [Code Quiz Project](https://britaniwalley.github.io/codequiz/) I started with the basics by creating a skeleton layout using Bootstrap. I made a card to hold my instructions, high score link, and score counter. Then, I made a  timer and put it in the corner away from my card containing the scores. I created an answer button and I took some buttons from Bootstrap to use to display the answers. 

Once I had my HTML together, I  started working on my JavaScript. I began by creating my necessary variables. Then, I worked on  getting my timer function working. After I had my timer functioning from 60-1 seconds, I started work on my questions and answers. I  decided to create my questions in an array and make my answers their own array within the questions array. 

After the questions array was created,  I created an askQuestion function that would go through the array of questions. Inside this function I made an event listener that responded eveery time an answer was  clicked. This event listener would console.log() the player's answer, send them an alert on if they were correct/incorrect, and move them on to the next question. Once they answer the last question, it will automatically send them to the high score page. 

While creating the high score page, I used a very basic HTML layout to set up a form where the player could submit their initials and it would display their score. 

<img width="1128" alt="Screen Shot 2021-01-24 at 8 44 32 PM" src="https://user-images.githubusercontent.com/74206593/105659019-fdb31c80-5e84-11eb-94c2-e1d1627080d7.png">