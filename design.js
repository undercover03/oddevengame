var p1_score=0;
var p2_score=0;
var p1_arr=[];
var p2_arr=[];
var count=0;
function play(){
 if(count!=6){
    var num=(Math.ceil(Math.random()*100));
    var num1=(Math.ceil(Math.random()*100));
   if(num%2==0){
    p1_score++;
    p1_arr[count]=1;
    document.getElementById("player1_score").innerText=p1_score;
  
   }
   if(num1%2==0){
    p2_score++;
    p2_arr[count]=1;
    document.getElementById("player2_score").innerText=p2_score;
   }
   update();
   count++;  
 }
 if(count==6){
 if(p1_score>p2_score){
    document.getElementById("result").innerText="Player1 Wins";
 }
 else if(p1_score<p2_score){
    document.getElementById("result").innerText="Player2 Wins";
 }
 else{
    document.getElementById("result").innerText="Match drawn";
 }
}
}

function update(){
    var parent1=document.getElementById("player1").children;
    if(p1_arr[count]==1){
        parent1[count].style.backgroundColor = "green";
    }
    else{
        parent1[count].style.backgroundColor="red";
    }
    var parent2=document.getElementById("player2").children;
    if(p2_arr[count]==1){
        parent2[count].style.background="Green";
    }
    else{
        parent2[count].style.background="red";
    }
}