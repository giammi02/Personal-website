document.addEventListener("mousemove", (e) => {
    const character = document.querySelector("[data-character]");
    const eyes = document.getElementsByClassName("eye");

    for (let i = 0; i < eyes.length; i++) {
        let x = (eyes[i].getBoundingClientRect().left) + (eyes[i].clientWidth / 2);
        let y = (eyes[i].getBoundingClientRect().top) + (eyes[i].clientHeight / 2);


        let radian = Math.atan2(e.clientX - x, e.clientY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;


        eyes[i].style.transform = "rotate(" + rotation + "deg)";
    }
});




