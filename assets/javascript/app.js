//variables
var correct = 0;
var correctSpan = document.getElementById("correct");
var wrong = 0;
var wrongSpan = document.getElementById("wrong");
var unanswered = 0;
var unansweredSpan = document.getElementById("unanswered")
var number = 60;
var intervalId;


//questions for game and answer array
var questions = [
    {
        question: "What TV show has the character Michael Scott?",
        choices: ["Parks & Recreation", "30 Rock", "The Office", "Friends"],
        rightAnswer: "The Office",
    },
    {
        question: "What TV show has the character Ron Swanson?",
        choices: ["Parks & Recreation", "30 Rock", "The Office", "Arrested Development"],
        rightAnswer: "Parks & Recreation",
    },
    {
        question: "What city is the NFL team PATRIOTS located in?",
        choices: ["New York", "Boston", "Houston", "Chicago"],
        rightAnswer: "Boston",
    },
    {
        question: "What year did Bill Clinton become president?",
        choices: [2001, 1992, 1989, 1996],
        rightAnswer: 1992,
    },
    {
        question: "In what city is Radio City Music Hall located?",
        choices: ["New York", "Charolotte", "Miami", "San Diego"],
        rightAnswer: "New York",
    }
];
var questionStart = $(".jumbotron")
var showQuestions = $(".questionContainer")
var submitAnswer = $(".SubmitAnswerResults")
var outOfTimeResults = $(".runOutofTimeResults")


// var showResults = (NEED TO MAKE A CONTAINER FOR THE RESULTS)
// go back and look at previous homework to do a score for the questions and answers



function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#show-number").html(number);
    if (number === 0) {
        stop();
        showQuestions.hide(".questionContainer");
        outOfTimeResults.show(".runOutofTimeResults");
        submitAnswer.hide(".SubmitAnswerResults")

        //create a jquery & html here to show the results page when time runs out. creat a separte result page tha says "time ran out"
    }
}
function stop() {

    clearInterval(intervalId);
}



$(document).ready(function () {


    $(".strtbutton").on("click", function () {
        showQuestions.show(".questionContainer");
        questionStart.hide(".jumbotron");
        run();
    })

    $("#finishedbutton").on("click", function () {
        showQuestions.hide(".questionContainer");
        submitAnswer.show(".SubmitAnswerResults")
        stop()
        //create a jquery & html here to show the results page when submit is clicked
    });

    $("#question1").text(questions[0].question)

    $("#question2").text(questions[1].question)

    $("#question3").text(questions[2].question)

    $("#question4").text(questions[3].question)

    $("#question5").text(questions[4].question)

    $("input[type='radio']").click(function () {
        var selectedValue = $("input[name='questionnumber1']:checked").val();

      

        if (selectedValue === "1") {
            correct++;
            correctSpan.textContent = correct;
            console.log(selectedValue)
        }

        else {
            wrong++
            wrongSpan.textContent = wrong;
            console.log("wrongAnswer")
        }

    });







})

