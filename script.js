let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

let endDate = new Date(2024, 11, 25, 0, 0); 
let endTime = endDate.getTime();

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;

    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    let addZeros = (num) => (num < 10 ? `0${num}` : num);

    if (remainingTime <= 0) {
        clearInterval(i);
        document.querySelector(".countbox").innerHTML = `<h1>Merry Christmas!</h1>`;
    } else {
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secLeft = Math.floor((remainingTime % oneMin) / 1000);

        dayBox.textContent = addZeros(daysLeft);
        hrBox.textContent = addZeros(hrsLeft);
        minBox.textContent = addZeros(minsLeft);
        secBox.textContent = addZeros(secLeft);
    }
}

let i = setInterval(countdown, 1000);
countdown();


let myDiv = document.getElementById("my-div");

function isTouchDevice(){
 
 try{
    document.createEvent("TouchEvent");
    return true;
}
catch(e){
    return false;
}
}

const move = (e) =>{
    try{
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;

        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    }

    catch(e){}
        myDiv.style.left = x - 160 + "px";
        myDiv.style.top = y - 160 + "px";
    
};

document.addEventListener("mousemove", (e)=>{
    move(e);
});

document.addEventListener("touchmove", (e)=>{
    move(e);
});

