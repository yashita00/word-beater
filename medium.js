window.addEventListener('load',init);
//Global variable

// Available levels
const levels = {
    easy: 10,
    medium: 7,
    hard: 5
}

//To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#wordInput');
const currentWord = document.querySelector('#currentWord');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words =["capital","performance","production","professional",
    "professor","question","quickly",
    "president","management","investment","international",
    "happen","generation","government","foreign","financial",
    "experience","everything","environmental","employee","education",
    "democratic","customer","challenge","business","behavior","beautiful",
    "administration","agreement","javascript","html","css","developer",
    "statue","river","revolver","woman","whatever","understand",
    "treatment","traditional","throughout","technology","student","successful"
    ];

//Initailize game
function init(){
    //show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // load word from array
    showWord(words);
    //start matching on word input
    wordInput.addEventListener('input',startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus,150);
}
//start match
function startMatch(){
    if(matchWords()){
       isPlaying = true;
       time = currentLevel+1;
       showWord(words);
       wordInput.value="";
       score++;
    }
    //if score is -1, display 0
    if(score === -1)
    {
        scoreDisplay.innerHTML = 0;
    }
    else{
        scoreDisplay.innerHTML = score;
    }
}
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = "Correct!!";
        return true;
    }
    else{
        message.innerHTML = "";
        return false;
    }
}

// Pick and Show Random Words
function showWord(words){
    // Generate Random Array Index
    const randIndex = Math.floor(Math.random() * words.length);
    // output random words
    currentWord.innerHTML = words[randIndex];
}

// Coundown Timer
function countdown(){
    // make sure time is not run out
    if(time>0){
        //decrease the time
        time--;
    }
    else if( time === 0){
        //game is over
        isPlaying = false;
    }
    // show time
    timeDisplay.innerHTML = time;
}
// check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = "Game Over!!";
        score = -1;
    }

}