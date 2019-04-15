// Variables
// =========================================================================================================
// Interval to start the count and set the clock to running
var intervalID;
// Sets the clockRunning to false
var clockRunning = false;
// holds the right answers
var questions = [
    {
        question: "Which of these is not a fruit?",
        answers: ["romaine", "orange", "blueberry", "grandma"],
        correctAnswer: "romaine"
    },
    {
        question: "Which fruit has the most potassium?",
        answers: ["pineapple", "banana", "orange", "rasberry"],
        correctAnswer: "pineapple"
    },
    {
        question: "What berry has the most antioxidants?",
        answers: ["blueberry", "strawberry", "blackberry", "rasberry"],
        correctAnswer: "blueberry"
    },
    {
        question: "Which one of these is not an apple?",
        answers: ["grandma", "pinklady", "fuji", "baldwin"],
        correctAnswer: "grandma"
    }
]
// Hides the submitButton
$("#submitButton").hide();
// Try again button hide at start
$("#tryAgainButton").hide();
var game = {
    // right answer tracker
    correctAnswers: 0,
    // wrong answer tracker
    wrongAnswers: 0,
    // Clock counter
    counter: 15,

    // Functions
    // ==========================================================================================================
    // Starts the trivia game
    startTrivia: function () {
        // show the timeRemaining
        $("#timeRemaining").show();
        // Set the timeRemaining text to 00:00
        $("#timeRemaining").text("Time Remaining: " + game.counter + "seconds");
        // Hides the questions
        $(".questions").hide()
        // Hides the submitButton
        $("#submitButton").hide();
        // Try again button hide at start
        $("#tryAgainButton").hide();
        // Loop that displays questions
        for (var i = 0; i < questions.length; i++) {
            // Append the questions
            $(".questions").append("<h3>" + questions[i].question + "</h3>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $(".questions").append("<br>" + " <input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'' > " + questions[i].answers[j])
            }
        }
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
        intervalID = setInterval(game.count, 1000);
        // only have one running interval at a time
        clockRunning = true;
    },

    // Reset
    reset: function () {
        // Stops the count 
        clearInterval(intervalID);
        // Sets the clock to not running
        clockRunning = false;
        // resets the time
        game.counter = 15;
        // resets correct answers
        game.correctAnswers = 0;
        // resets wrong answers
        game.wrongAnswers = 0;
        // questions
        $(".questions").empty();
    },
    // Holds the count
    count: function () {
        game.counter--;
        $("#timeRemaining").html("<h3>Time Remaining: " + game.counter + " seconds </h3>");
        if (game.counter === 0) {
            alert("Time is up!");
            game.checkAnswer();
            game.reset();
        }
    },
    // Gets the answers chosen and scores them based on right and wrond answers
    checkAnswer: function () {
        $.each($("input[name=question-0]:checked"), function () {
            if ($(this).val() === questions[0].correctAnswer) {
                game.correctAnswers++;
            } else { game.wrongAnswers++; }
        });
        $.each($("input[name=question-1]:checked"), function () {
            if ($(this).val() === questions[1].correctAnswer) {
                game.correctAnswers++;
            } else { game.wrongAnswers++; }
        });
        $.each($("input[name=question-2]:checked"), function () {
            if ($(this).val() === questions[2].correctAnswer) {
                game.correctAnswers++;
            } else { game.wrongAnswers++; }
        });
        $.each($("input[name=question-3]:checked"), function () {
            if ($(this).val() === questions[3].correctAnswer) {
                game.correctAnswers++;
            } else { game.wrongAnswers++; }
        });
        // show the correctAnswerSummary
        $("#correctAnswerSummary").show();
        // show the wrongAnswerSummary
        $("#wrongAnswerSummary").show();
        // correctAnswerSummary
        $("#correctAnswerSummary").text("Correct Answers: " + game.correctAnswers);
        // wrongAnswerSummary
        $("#wrongAnswerSummary").text("Wrong Answers: " + game.wrongAnswers);
        // Shows the try again button
        $("#tryAgainButton").show();
        // Times up text
        $("#timeRemaining").text("Time's up!");
        $(".questions").hide();
        // Hides the submit button
        $("#submitButton").hide();
    },


    // When you click the submit button
    submit: function () {
            // Stops the count 
            clearInterval(intervalID);
            // Sets the clock to not running
            clockRunning = false;
            // Hides the questions
            $(".questions").hide()
            // Hides the time Remaining
            $("#timeRemaining").text("Your Summary");
            // correctAnswerSummary
            $("#correctAnswerSummary").text("Correct Answers: " + correctAnswers);
            // wrongAnswerSummary
            $("#wrongAnswerSummary").text("Wrong Answers: " + wrongAnswers);
            // show the correctAnswerSummary
            $("#correctAnswerSummary").show();
            // show the wrongAnswerSummary
            $("#wrongAnswerSummary").show();
            // show try again button    
            $("#tryAgainButton").show();
            // Hides the submitButton
            $("#submitButton").hide();
    }
}

$("#startButton").on("click", function () {
    $("#timeRemaining").show();
    game.startTrivia();
});

$("#submitButton").on("click", function () {
    game.checkAnswer();
    game.reset();
});

$("#tryAgainButton").on("click", function () {
    $("#timeRemaining").show();
    game.reset();
    game.startTrivia();
});