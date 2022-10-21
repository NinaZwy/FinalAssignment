/*random text generater*/
function getanswer(){
    var word=['wait','take a chance','it is not worth a struggle','good to have a try',
'good luck','time to move on','shift your focus','time to move on','you are the best',
'you will ot be disappointed','relax','time would tell','do not give up',]
    var para=document.querySelector('check');
    para.innerHTML=word[Math.floor(Math.random()*word.length)];
}

/*time*/
function updateClock(){
    var now= new Date();
    var hour=now.getHours(),
    min=now.getMinutes(),
    sec=now.getSeconds();
    var ids=["hour","minutes","seconds"];
    var values=[hour,min,sec];
    for(var i=0;i<ids.length;i++)
    document.getElementById(ids[i]).firstChild.nodeValue=values[i];


}

/*make clock will change with time going.*/
function initClock(){
    updateClock();
    window.setInterval("updateClock()",1)
}
