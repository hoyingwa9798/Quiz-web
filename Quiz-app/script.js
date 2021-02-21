//define the question obect
const quizData=[
    {
        question:'1+1=?',
        a: '2',
        b: '11',
        c: '3',
        d: '4',
        correct: 'c'
    },
    {
        question:'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'Python',
        c: 'JavaScript',
        d: 'Ruby',
        correct: 'a'
    },
    {
        question:'Do you love pokemon?',
        a: 'Yes',
        b: 'No',
        c: '....What is pokemon?',
        d: 'I do not care, my friend',
        correct: 'd'
    }
]
//locate the question number we are doing
questionNumber = 0;

$(document).ready(function(){

    function questionLoad(questionNumber){
    	//update the question
        $("h2").html(quizData[questionNumber].question);
        $("label[for='a']").html(quizData[questionNumber].a);
        $("label[for='b']").html(quizData[questionNumber].b);
        $("label[for='c']").html(quizData[questionNumber].c);
        $("label[for='d']").html(quizData[questionNumber].d);
    }

    $(".question-container").hide();
    $("#arrow-container").hover(function(){
        $("#arrow").removeClass("far fa-caret-square-right");
        $("#arrow").addClass("fas fa-caret-square-right");
    })

    $("#arrow-container").mouseleave(function(){
        $("#arrow").removeClass("fas fa-caret-square-right");
        $("#arrow").addClass("far fa-caret-square-right");
    })

    $(".arrow-container").click(function(){
        questionLoad(questionNumber);
        questionNumber++;
        $(".quiz-start").hide();
        $(".question-container").fadeIn("slow");
    })
    
    $(".button").click(function(){
        var radioValue = $("input[name='answer']:checked").val();
        if(radioValue){
            if(radioValue===quizData[questionNumber].correct){
                alert("Nice! Correct answer!");
            }
            else{
                alert("Sorry, wrong answer");
            }
        }
    })
    
    //go to the next question
    $(".fa-chevron-circle-right").click(function(){
        questionLoad(questionNumber);
        if(questionNumber+1<=2){
            questionNumber++;
        }
    })
    //go back to the last question
    $(".fa-chevron-circle-left").click(function(){
        questionLoad(questionNumber);
        if(questionNumber-1>=0){
            questionNumber--;
        }
    })
});