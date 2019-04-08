// Variables
// =========================================================================================================
// Interval to start the count and set the clock to running
var intervalID;
// Sets the clockRunning to false
var clockRunning = false;
//  Sets the time to 90 seconds
var time = 2;
// holds the right answers
var answers = ["romaine", "orange" , "blueberry" , "grandma"];
// right answer tracker
var correctAnswers = 0;
// wrong answer tracker
var wrongAnswers = 0;
// Hides the questions
$(".questions").hide()
// Hides the submitButton
$("#submitButton").hide();
// Hides the time Remaining
$("#timeRemaining").hide();
// Try again button hide at start
$("#tryAgainButton").hide();
// $("#tryAgainButton").on("click", startTrivia());
 
// Functions
// ==========================================================================================================
// Starts the trivia game
$("#startButton, #tryAgainButton").on("click", function startTrivia(){ 
        // show the timeRemaining
        $("#timeRemaining").show();
        // Set the timeRemaining text to 00:00
        $("#timeRemaining").text("Time Remaining: " + time + "seconds");
        // Show the questions
        $(".questions").show();
        // Show the submitButton
        $("#submitButton").show();
        // Hide the startButton
        $("#startButton").hide(); 
        // hides the try again button 
        $("#tryAgainButton").hide();
        // correctAnswerSummary
        $("#correctAnswerSummary").hide();
        // wrongAnswerSummary
        $("#wrongAnswerSummary").hide();
        // to prevent multiple intervals being set simultaneously
            if(!clockRunning){
                intervalID = setInterval(count, 1000);
            // only have one running interval at a time
                clockRunning = true;   
            }
    });
// starts the startTrivia function 
// startTrivia();

// Reset
function reset(){
    // $("#timeRemaining").hide();
    $(".questions").hide();
    // Hides the submit button
    $("#submitButton").hide();
    // Shows the try again button
    $("#tryAgainButton").show();
    // Times up text
    $("#timeRemaining").text("Time's up!");
    // show the correctAnswerSummary
    $("#correctAnswerSummary").show();
    // show the wrongAnswerSummary
    $("#wrongAnswerSummary").show();
    // correctAnswerSummary
    $("#correctAnswerSummary").text("Correct Answers: " + correctAnswers);
    // wrongAnswerSummary
    $("#wrongAnswerSummary").text("Wrong Answers: " + wrongAnswers);
    // Stops the count 
    clearInterval(intervalID);
    // Sets the clock to not running
    clockRunning = false;
    // resets the time
    time = 5;

};

// Holds the count
function count(){
    time--;
    $("#timeRemaining").text("Time Remaining: " + time + " seconds");
    if (time === 0){
        alert("Time is up!")
        reset();
    }
};


// Gets the answers chosen and scores them based on right and wrond answers
function getAnswer(){
    $(".questions input").on("click" , function () {
        var selValue = $("[type='radio']:checked").val();
        console.log(answers);

        if (selValue == answers.length){correctAnswers++;} 
        else if (selValue !== answers.length){wrongAnswers++;}
    });
 
    }
getAnswer();

// var answers = ["romaine", "orange" , "blueberry" , "grandma"];








    