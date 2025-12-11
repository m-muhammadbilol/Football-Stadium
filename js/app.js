const elStadium = document.getElementById("stadium");
const elBall = document.getElementById("ball");
const elEffect = document.getElementById("effect")

elStadium.addEventListener("click", (event) => {
            
    const x = event.clientX 
    const y = event.clientY 
    elBall.style.left = x + "px";
    elBall.style.top = y + "px";
    elEffect
});
