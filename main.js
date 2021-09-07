const squere = document.createElement('div'); //tworzenie kwadratu
document.body.appendChild(squere); //dodanie dziecka (kwadratu) do body


let grow = true; //flaga mowi ze grow ma byc true

let size = 100;//wielkosc kwadratu
//ustawianie wysokości i szerokości w JS
squere.style.width = size +"px";
//100 + "px" -> "100" + "px" ->konkatenacja = "100px"
squere.style.height = size +"px";

//maksymalna wielkość kwadratu
//window.innerWidth * 0,5

window.addEventListener("scroll", function(){
  
   

    if(size >= window.innerWidth/2){
        grow = false;
    }
    else if (size == 0) {
        grow = true;
    }
    
    if (grow == true ) {
        size += 5
    squere.style.width = size  + "px";
    squere.style.height = size  + "px";
    }
    else {
        size -= 5
    squere.style.width = size  + "px";
    squere.style.height = size  + "px";
    }
})

//jesli if jest prawidłowy to kwadrat rośnie, jesli przestał rosnąć 
//wchodzi else i kwadrat maleje, jeśli zmalał do zera to else if pokazuje 
//ze ma znowu rosnąć