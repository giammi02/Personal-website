// ***** NAVIGATION BAR SCRIPT ***** //
let mainMenu = document.querySelector("[data-mainMenu]");
let menuButton = document.querySelector("[data-menubutton]");
let nav2 = document.querySelector("[data-nav2");
let nav3 = document.querySelector("[data-nav3");

let isMenuExpanded = false;  //keep track of when menu is expanded or not
menuButton.addEventListener("click", ()=>
{
expandMenu();
});


let mediaQueryStart = window.matchMedia('(max-width: 859px)')
if (mediaQueryStart.matches) 
        AdjustmentsMobile();

window.addEventListener("resize", ()=>{
    // Create a media condition that targets viewports at least 960px wide
    let mediaQuery = window.matchMedia('(min-width: 960px)');
    // Check if the media query matches
    if (mediaQuery.matches) 
        AdjustmentsDesktop();
    else
        AdjustmentsMobile();
    })

    

function AdjustmentsDesktop(){
    mainMenu.appendChild(nav3);

    mainMenu.style.cssText = `
    height: 70px;
    `;

}

function AdjustmentsMobile(){
    menuButton.innerText = "Menu";

    nav2.appendChild(nav3);
}


//mobile menu visualizer
function expandMenu()
{
    if(!isMenuExpanded){
        isMenuExpanded = true;
    //expand menu
    mainMenu.style.cssText = `
    height: 300px;
    background-color: rgba(0, 0, 0);
    `;

    menuButton.innerText = "Close";

    }
    else
    {
        mainMenu.style.cssText = `
        height: 70px;
        background-color: rgba(0, 0, 0, 0.5);   
        `;

        menuButton.innerText = "Menu";

    isMenuExpanded = false;
    }

}

// ***** END NAVIGATION BAR SCRIPT ***** //
