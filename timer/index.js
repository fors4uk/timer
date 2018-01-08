$(document).ready(function(){

var timer; 
var timerSeconds;
var timerFinish;
function drawTimer(percent,seconds){
    (percent > 50 ? $('#slice').addClass("gt50") : null);
    (percent > 50 ? $('#piefill').addClass("pie fill") : null);

    var deg = 360/100*percent;
    var pieSlice = $('#slice .pie');
    var showSec = $('.percent');
    pieSlice.css({
        '-moz-transform':'rotate('+deg+'deg)',
        '-webkit-transform':'rotate('+deg+'deg)',
        '-o-transform':'rotate('+deg+'deg)',
        'transform':'rotate('+deg+'deg)'
    });

    showSec.html(seconds);

};

function stopWatch(){
    var seconds = (timerFinish-(new Date().getTime()))/1000;
    if(seconds <= 0){
        drawTimer(100);
        clearInterval(timer);
    }else{
        var percent = 100-((seconds/timerSeconds)*100);
        drawTimer(percent,Math.round(seconds));
    }
};

var startTimer = function(){
    timerSeconds = 10;

    timerFinish = new Date().getTime()+(timerSeconds*1000);
    timer = setInterval(stopWatch, 50);

};
startTimer();
});
