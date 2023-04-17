
document.addEventListener("mousemove", (e) => {
    console.log(e);
    console.log("hey");
    const character = document.querySelector("[data-character]");
    const eyes = document.getElementsByClassName("eye");

    const eye1= document.querySelector("[data-eye1]");
    const eye2= document.querySelector("[data-eye2]");

    //obtain mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    //obtain character position
    const characterPosition = character.getBoundingClientRect();

    //calculate the center of the element 
    const characterX = characterPosition.left + characterPosition.width / 2;
    const characterY = characterPosition.right + characterPosition.height / 2;

    const angleDeg= angle(mouseX, mouseY, characterX, characterY);

    eye1.style.transform = `rotate(${180+angleDeg}deg)`;
    eye2.style.transform = `rotate(${angleDeg}deg)`;
    /*
    for(let i=0; i<eyes.length; i++){
        eyes[i].style.transform = `rotate(${90+angleDeg}deg)`;
    } */
})

function angle(mX, mY, cX, cY){
    const dy = cY - mY; 
    const dx = cX - mX;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI; // conversion rads to degs, range (-180, 180)
    
    return deg;
}