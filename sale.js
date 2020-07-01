let html = document.querySelector("html"),
timerBlock = document.querySelector(".timer"),
nav=document.querySelector("nav");

//Делегирование (клик)
html.addEventListener("click", (event) => {
    let target = event.target;
    if (!target.matches("a") && !target.matches("a *")) event.preventDefault();
    if (!target.matches("nav") & document.body.clientWidth<800) nav.style.display="none";
    if (!target.matches(".btn")) return;
    //menu
    else if (target.matches("#header-button")){
        nav.style.display = nav.style.display == "none"? "flex":"none";
    };
});

function getTimer(dedline){
    let dateNow = new Date(),
    dateFuture = new Date(dedline),
    date= dateFuture- dateNow;
    ms=dateFuture-dateNow<0?0:dateFuture-dateNow,
    sec=Math.floor(ms/1000 % 60),
    min=Math.floor(ms/1000/60%60),
    hours=Math.floor(ms/1000/60/60);
    if (date<0){
        clearInterval(IsInterval);
        sec=0;
        min=0;
        hours=0;
    }
    return {
        sec,
        min,
        hours
    };
}
function setTimer(){
    const timer = getTimer('15 september 2020');
    let time=(timer.hours<10?"0":"")+timer.hours +":"+ (timer.min<10?"0":"")+timer.min +":"+ (timer.sec<10?"0":"")+timer.sec;
    timerBlock.textContent = time;
}
let IsInterval=setInterval(setTimer, 1000);