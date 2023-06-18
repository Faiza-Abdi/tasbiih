
let intailvalue = 0;

let value = document.querySelector(".value");

const increment = document.querySelector(".increment");
const reset = document.querySelector(".reset");
const decrement = document.querySelector(".decrement");
const body = document.querySelector("body")


increment.addEventListener("click",() =>{

    intailvalue++;
    value.innerHTML = intailvalue;

     if(intailvalue==10){

        value.style.color="blue"
    }
})

reset.addEventListener("click",() =>{

    intailvalue = 0;
    

    if (intailvalue==0){

        value.style.color="red"
    }
    else{

        value.style.color="black"
    }
    value.innerHTML = intailvalue;

})


decrement.addEventListener("click", () =>{

     if (intailvalue > 0){
    intailvalue--;

   
    value.innerHTML = intailvalue;
}

 

})

