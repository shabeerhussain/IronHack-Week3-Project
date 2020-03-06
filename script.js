let allQuestions = [
  {
    question: "What's the capital of France?",
    options: ['Beirut', 'Brussels', 'Paris'],
    answer: 'Paris',
  },
  {
    question: 'What is the capital of the UK?',
    options: ['London', 'Brussels', 'Paris'],
    answer: 'London',
  },
  {
    question: 'What is the capital of the Spain?',
    options: ['Madrid', 'London', 'Paris'],
    answer: 'Madrid',
  },
  {
    question: 'What is the capital of the Italy?',
    options: ['Madrid', 'Rome', 'Paris'],
    answer: 'Rome',
  },
  {
    question: 'What is the capital of the Australia?',
    options: ['Canberra', 'Sidney', 'Melbourne'],
    answer: 'Canberra',
  },
  {
    question: 'What is the capital of the Canada?',
    options: ['Quebec', 'Toronto', 'Ottawa'],
    answer: 'Ottawa',
  },
  {
    question: 'How many capital cities does South Africa have?',
    options: ['One', 'Two', 'Three'],
    answer: 'Three',
  },
  {
    question: 'What is the capital India?',
    options: ['Mumbai', 'New Delhi', 'Delhi'],
    answer: 'New Delhi',
  }
];
console.log(allQuestions.length)
let $q  = document.querySelector('#question'); //initiate variable with current question
let $b1 = document.querySelector('#option1'); //initiate variable with current first option
let $b2 = document.querySelector('#option2'); //initiate variable with current second option
let $b3 = document.querySelector('#option3'); //initiate variable with current third option
let $result = document.querySelector('#results') //initiate variable with current score
let $optionButtons = document.querySelectorAll('.options'); //initiate variable to store the options
let questCount = 0;
let score = 0;


function renderQuestions() { // function runs  
  if(questCount<allQuestions.length){ //if the counter is less than the questions in the array
    $q.innerHTML = allQuestions[questCount].question; // show the question
  $b1.innerHTML = allQuestions[questCount].options[0]; // show the first option of current i the loop
  $b2.innerHTML = allQuestions[questCount].options[1]; // show the second option of current i the loop
  $b3.innerHTML = allQuestions[questCount].options[2]; // show the third option of current i the loop
  }
}

document.querySelector('#next').addEventListener('click', () => { // listen for the click on the next button then run function
  renderQuestions(); //run the above function to render the questions to the screen
  questCount++; //increment counter every time by 1 to keep track of the loop
  if(questCount-1==allQuestions.length){ //if the question count is = to number of questions 
    let yourScore = score //create variable for later use
    $result.innerHTML = yourScore // display result 
    alert (`Your score is ${score}`)
    console.log(score)
    console.log(allQuestions.length)
  }
});

for (let button of $optionButtons) { // looping through optionsButtons
  button.addEventListener('click', function() { //checking for click then running function
    let ans = allQuestions[questCount - 1].answer; // initiating ans variable to store current answer of the loop 
    if (button.innerHTML === ans) { //if the text buttons matches the variable ans run function
      score++; //increment score
      console.log(score);
    }
  });
}
