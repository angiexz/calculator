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

function operate(full_s){
    Array.from(full_s);
    let found = false;
    let op_index = null;
    let sol = null;
    console.log(full_s);
    console.log(full_s.length)
    for(let l = 0 ; l<full_s.length;l++){
        let letter = full_s[l];
        console.log(letter);
        if(letter = '+'){
            num1 = Number(full_s.slice(0,l));
            num2 = Number(full_s.slice(l+1));
            sol = add(num1,num2);
            found = true;
            console.log('num1' + num1);
            console.log('num2' + num2);
            break;

        }else if (letter = '-'){
            num1 = Number(full_s.slice(0,l));
            num2 = Number(full_s.slice(l+1,array.length+1));
            sol =sub(num1,num2);
            found = true;
            console.log("o");
    
        }else if (letter = 'x'){
            num1 = Number(full_s.slice(0,l));
            num2 = Number(full_s.slice(l+1,array.length+1));
            sol =mult(num1,num2);
            found = true;
            console.log("o");

        }else if (letter = '/'){
            num1 = Number(full_s.slice(0,l));
            num2 = Number(full_s.slice(l+1,array.length+1));
            sol=mult(num1,num2);
            found = true;
            console.log("o");
        }
        
        console.log("fuck");
        

    }
    if (found = false){
        console.log("ohno");
    }
    document.getElementById('disp').innerHTML=sol;
    console.log(sol);
    found = false;
}

//Add event listeners to all the buttons
let small_button= document.querySelectorAll('.small_button');
Array.from('small_button');

let d = document.getElementById('disp');

//Add an event listener to every number 
for(let j = 0; j<small_button.length; j++){
    let s = small_button[j];
    let message = s.value;
    s.addEventListener('click',()=>{
        d.innerHTML = d.innerHTML + message;
    })
}

//add event listner to = 
let equal = document.getElementById('equal');
equal.addEventListener('click',()=>{
    let display_message = document.getElementById('disp').innerText;
    operate(display_message);
})

//error message if there is already one operator and you try to add another one