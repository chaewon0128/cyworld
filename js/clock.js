const clock = document.querySelector(".clock");



function currentTime() {
    
    const now = new Date();
    const hour = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");

    clock.innerText = `${hour}:${minutes}`
}
currentTime();
setInterval(currentTime,1000)