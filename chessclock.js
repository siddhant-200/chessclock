var distance = 10;

var time1 = document.getElementById("time1").textContent = distance;
var time2 = document.getElementById("time2").textContent = distance;

setInterval( function()
{
    if(document.getElementById("time1").textContent == 0)
    {
        alert("player 1 lost");
    }
    document.getElementById("time1").textContent--;
} 
,1000 );













