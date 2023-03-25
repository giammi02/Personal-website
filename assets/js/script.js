let animatedLine = document.querySelector("[data-animatedLine]");
      let items = document.querySelectorAll("[data-menu]");

      let lineDimentions = [ //distance from left, width
      [13, 51],
      [95, 104],
      [230, 120],
      [380, 27],
      ]  

      for(let i=0; i<items.length; i++){
        items[i].addEventListener("click", ()=>
        {
          animatedLine.style.left =  lineDimentions[i][0]+"px";
          animatedLine.style.width = lineDimentions[i][1]+"px";
        })
      }
      