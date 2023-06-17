let num1 = null; num2 = null; op = null;

function add(n1,n2){
    return n1+n2;
}

function sub(n1,n2){
    return n1/n2;
}

function mult(n1,n2){
    return n1*n2;
}

function div(n1,n2){
    return n1/n2;
}

function operate(n1,n2,op){
    if(op == '+'){
        n1 = sol(n1,n2);
    }

    //etc etc
}

//Add event listeners to all the buttons
let small_button= document.querySelectorAll('.small_button');
Array.from('small_button');

let d = document.getElementById('disp');

//Add an event listener to every button
for(let j = 0; j<small_button.length; j++){
    let s = small_button[j];
    let message = s.value;
    s.addEventListener('click',()=>{
        d.innerHTML = d.innerHTML + message;
    })
}
