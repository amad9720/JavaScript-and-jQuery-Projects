function submitAnswers(){
    var total = 5;
    var score = 0;
    var i;
    var e = 1;

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    //Validation
    for (i = 1; i < 6; i++) {
        if(eval('q'+i) == null || eval('q'+i) == ''){
            alert('You missed question ' + i);
            return false;
        }
    }

    // Set correct answers
    var answers = ["b","a","d","b","d"];

    //Check the answers
    for (i = 0; i < total; i++) {
        if(eval("q"+e) == answers[i]){
            score++;
        }
        e++;
    }

    //Display the score
    var results = document.getElementById('results');
    if (score > 3) {
        results.innerHTML = '<h3 class="good">Congratulations you got '+score+' out of '+total+' 👍👏</h3>';
    }else if (score > 1) {
        results.innerHTML = '<h3 class="regular">Come on you can do better, you got '+score+' out of '+total+' 😕</h3>';
    }else{
        results.innerHTML = '<h3 class="bad">You better study, you got '+score+' out of '+total+' 👎😔</h3>';
    }

    return false;

}
