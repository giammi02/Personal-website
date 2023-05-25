const character = document.querySelector("[data-character]");
const eyes = document.getElementsByClassName("eye");
const lordeAudio = document.getElementById("lordeaudio");

document.addEventListener("mousemove", (e) => {
    for (let i = 0; i < eyes.length; i++) {

        //obtain character position
        let x = (eyes[i].getBoundingClientRect().left) + (eyes[i].clientWidth / 2);
        let y = (eyes[i].getBoundingClientRect().top) + (eyes[i].clientHeight / 2);

        //positon of the mouse compared to the character position (angle in radians)
        let radian = Math.atan2(e.clientX - x, e.clientY - y);

        //conversion radians to degrees
        let rotation = (radian * (180 / Math.PI) * -1) + 270;

        //moving the eyes
        eyes[i].style.transform = "rotate(" + rotation + "deg)";
    }
});

//character voice
character.addEventListener("click", ()=>
{
    lordeAudio.play();
})





