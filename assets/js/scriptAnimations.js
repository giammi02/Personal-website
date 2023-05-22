let allSkillsCard = document.getElementsByClassName("skills-card");
let skillsCardLeft = document.getElementsByClassName("from-left");
let skillsCardRight = document.getElementsByClassName("from-right");


//hide the skills cards
for (let i = 0; i < skillsCardRight.length; i++) {
    skillsCardRight[i].classList.add("hidden-right");
}
for (let i = 0; i < skillsCardRight.length; i++) {
    skillsCardLeft[i].classList.add("hidden-left");
}

const options = {
    root: null,
    threshold: 0.2, //trigger animation at 20% viewport
}

//create Observer
const observer = new IntersectionObserver(callback, options);

// animation is slightly different between desktop and mobile
if ($(window).width() < 768) {
    for (let i = 0; i < allSkillsCard.length; i++)
        observer.observe(allSkillsCard[i]);
}
else {
    //observe section skills
    observer.observe(document.querySelector("#skills"));
}


function callback(entries) {
    const [entry] = entries;

    if ($(window).width() < 768) 
        animationMobile([entry]);
    else
        animationDesktop([entry]);


}


function animationMobile([entry]) {
    // get the id name of the target item that came into view
    const itemId = entry.target.getAttribute("id");

    // target that specific item
    const item = document.querySelector(`#${itemId}`);

    if (entry.isIntersecting) {
        for (let i = 0; i < allSkillsCard.length; i++) {
            item.classList.add("fadeIn-translate");
        }

        return;
    }
}

function animationDesktop([entry]) {
    if (entry.isIntersecting) {
        for (let i = 0; i < allSkillsCard.length; i++) {
            allSkillsCard[i].classList.add("fadeIn-translate");
        }

        return;
    }
}