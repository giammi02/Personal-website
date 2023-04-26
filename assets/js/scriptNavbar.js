let mainMenu = document.querySelector("[data-mainMenu]");
let menuButton = document.querySelector("[data-menubutton]");
let navbar = document.querySelector("[data-navbar]");
let icons = document.getElementsByClassName("icon");
let nav2 = document.querySelector("[data-nav2]");
let nav3 = document.querySelector("[data-nav3]");

let isMenuExpanded = false;  //keep track of when menu is expanded or not
menuButton.addEventListener("click", () => {
    expandMenu();
});


let mediaQueryStart = window.matchMedia('(max-width: 959px)')
if (mediaQueryStart.matches)
    AdjustmentsMobile();

window.addEventListener("resize", () => {
    // Create a media condition that targets viewports at least 960px wide
    let mediaQuery = window.matchMedia('(min-width: 960px)');
    // Check if the media query matches
    if (mediaQuery.matches)
        AdjustmentsDesktop();
    else
        AdjustmentsMobile();
})



function AdjustmentsDesktop() {
    mainMenu.appendChild(nav3);

    mainMenu.style.cssText = `
    height: 70px;
    `;

}

function AdjustmentsMobile() {
    menuButton.innerText = "Menu";

    nav2.appendChild(nav3);
}


//mobile menu visualizer
function expandMenu() {
    if (!isMenuExpanded) {
        isMenuExpanded = true;
        //fix icons appearing for a moment at the load of the site
        for (let i = 0; i < icons.length; i++)
            icons[i].style.cssText = `opacity: 1;`;
        //expand menu
        mainMenu.style.cssText = `height: 300px;`;
        navbar.style.cssText = ` background-color: rgba(0, 16, 28); `

        menuButton.innerText = "Close";

    }
    else {
        mainMenu.style.cssText = `height: 70px;`;
        navbar.style.cssText = ` background-color: rgba(0, 16, 28, 0.6); `
        menuButton.innerText = "Menu";
        
        isMenuExpanded = false;
    }

}

document.addEventListener("scroll", ()=>{

    //make menu darker when user scroll (avoid confusion with text behind)
    if(window.scrollY!=0)
    navbar.style.cssText = ` background-color: rgba(0, 16, 28, 0.9); `
    else
    navbar.style.cssText = ` background-color: rgba(0, 16, 28, 0.6); `
    
    //fix menu button when user scroll
    if(isMenuExpanded){
        expandMenu();
    }
    
})



