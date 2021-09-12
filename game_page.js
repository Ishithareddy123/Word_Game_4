question_turn="player1";
answer_turn="player2";
var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" :";
document.getElementById("player2_name").innerHTML=player2_name+" :";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question turn - "+player1_name;
document.getElementById("player_ans").innerHTML="Answer turn - "+player2_name;

function send(){
    get_word=document.getElementById("word").value;

    converted=get_word.toLowerCase();
    charAt1=converted.charAt(1);
    mid=Math.floor(converted.length/2);
    charAt2=converted.charAt(mid);
    last=converted.length-1;
    charAt3=converted.charAt(last);
    replace1=converted.replace(charAt1,"_");
    replace2=replace1.replace(charAt2,"_");
    replace3=replace2.replace(charAt3,"_");

    question="<h4 id='question'> q :"+replace3+"</h4>";
    answer="<input type='text' placeholder='Type the word' id='input'>";
    button="<br>"+"<br>"+"<button id='check' onclick='check()'> Check </button>";
    row=question+answer+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value=" ";
}

function check(){
    answer=document.getElementById("input").value;
    answer=answer.toLowerCase();
    if(answer==converted){
        if(answer_turn=="player1"){
            player1_score++;
           document.getElementById("player1_score").innerHTML=player1_score; 
        }
        else{
            player2_score++;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player2"){
        question_turn="player1";
       document.getElementById("player_question").innerHTML="question Turn : "+player1_name; 
    }
    else{
        question_turn="player2";
       document.getElementById("player_question").innerHTML="question Turn : "+player2_name; 
    }
    if(answer_turn=="player2"){
        answer_turn="player1";
       document.getElementById("player_ans").innerHTML="answer Turn : "+player1_name; 
    }
    else{
        answer_turn="player2";
       document.getElementById("player_ans").innerHTML="answer Turn : "+player2_name; 
    }
    document.getElementById("output").innerHTML=" ";
}