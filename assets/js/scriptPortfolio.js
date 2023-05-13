let buttons = document.getElementsByClassName("button-project");

//makes project card background lighter when user is over the button
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("mouseover", () => {
        let numCard = i+1; //project-card <IDs start from 1 
        let card = document.getElementById("project-card-"+numCard);
        card.style.cssText = `background-color: rgba(32, 32, 32, 0.2)`;
    });
}

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("mouseout", () => {
        let numCard = i+1; //project-card <IDs start from 1 
        let card = document.getElementById("project-card-"+numCard);
        card.style.cssText = `background-color: rgba(32, 32, 32, 0.8)`;
    });
}