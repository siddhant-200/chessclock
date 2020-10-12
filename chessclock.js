var distance = 10;
var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");

var time1 = document.getElementById("time1").textContent = distance;
var time2 = document.getElementById("time2").textContent = distance;
var check = false;
resetButton.addEventListener("click",function(){
	location.reload();
})
startButton.addEventListener("click",function() {setInterval( function()
{
	if(document.getElementById("time1").textContent == 0)
    {
    	clearInterval();
        alert("Player 1 Lost");
        location.reload();
    }
    document.getElementById("time1").textContent--;

    
} 
,1000 );});













