var flag = true;
var values = [1,0,1,0,1,0,0,1,0];
var players1, players2;
var players1Count=0, players2Count=0;

document.querySelector('.container').addEventListener('click',function(e){
    var index = e.target.id;
    if(values[index] ==1  || values[index] == 0)
    {
        values[index] = setVal();
        e.target.innerHTML = setVal();
        flag = !flag;
        getWinner();
    }
    else
        alert("Not allowed");
    console.log(values);
})

function setVal(){
    return (flag) ? 'X' : 'O';
}

function getWinner(){

    winnerIndexes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let i=0; i<winnerIndexes.length; i++){
        let [a, b, c] = winnerIndexes[i];
        if(values[a] == values[b] && values[b] == values[c]){
            getScore(a, b, c);
            break;
        }
    }
}

function startGame(){
    // alert("Started");
    players1 = document.querySelector('#player1').value;
    players2 = document.querySelector('#player2').value;

    if(players1 == '' || players2 == '')
        alert("Enter the players name");
    else if(players1 == players2)
        alert("Players name can't be same");
    else
    {
        document.querySelector('.gameContainer').style.visibility = 'visible';
        document.querySelector('.players').style.visibility = 'hidden';
        document.querySelector('#username1').innerHTML = "<strong>"+players1+"</strong>"
        document.querySelector('#username2').innerHTML = "<strong>"+players2+"</strong>"
    }
}

document.querySelector('#btn-1').addEventListener('click',function(){
    var box = document.querySelectorAll('.boxes');
    for(let i=0; i<box.length;i++){
        box[i].innerHTML = "";
        box[i].style.color = "deepskyblue";
    }
    values = [1,0,1,0,1,0,0,1,0];
    flag = true;
})

function getScore(x, y, z){
    if(flag)
    {
        console.log(players2, " WINNER");
        players2Count++;
    }
    else
    {
        console.log(players1, " WINNER");
        players1Count++;
    }

    document.querySelector('#score1').innerHTML = "<strong>"+players1Count+"</strong>"
    document.querySelector('#score2').innerHTML = "<strong>"+players2Count+"</strong>"
    document.getElementById(x).style.color ="rgb(79, 6, 79)";
    document.getElementById(y).style.color ="rgb(79, 6, 79)";
    document.getElementById(z).style.color ="rgb(79, 6, 79)";
    values = [null, null, null, null, null, null, null, null, null];
}
