let num1 = null; num2 = null; op = null;

function add(n1,n2){
    return n1+n2;
}

function sub(n1,n2){
    return n1-n2;
}

function mult(n1,n2){
    return n1*n2;
}

function div(n1,n2){
    return n1/n2;
}
function cl(display){
    display.innerHTML = "";
}

function del(display){
    let txt= display.innerText;
    let arr = Array.from(txt);
    let n = arr.slice(0,arr.length-1);
    let n_string = n.join("");
    display.innerHTML= n_string;
}
function too_many_dots(slice){
    let a = slice.match(/\./gi);
    if (a!=null){
        if (slice.match(/\./gi).length>1){
            console.log('oye');
            return true;
    }
    }else{
    }
}
function operate(full_s){
    Array.from(full_s);
    let copy  = full_s;
    let found = false;
    let op_num = null;
    let sol = null;
    let too_many_d = false;
    for(let l = 0 ; l<full_s.length;l++){
        let letter = full_s[l];
        if(letter == '+'){
            num1_s = full_s.slice(0,l);
            num2_s = full_s.slice(l+1);
            too_many_d = too_many_dots(num2_s);
            too_many_d = too_many_dots(num1_s);

            if (too_many_d == true){
                found=true;
                break;
            }

            too_many_d = too_many_dots(num2_s);
            if (too_many_d == true){
                found=true;
                break;
            }
            num1 = Number(num1_s);
            num2 = Number(num2_s);
 
            sol = add(num1,num2);
            found = true;
            console.log('num1' + num1);
            console.log('num2' + num2);
            op_num = op_num+1;

        }else if (letter == '-'){
            let negative = copy[l-1]=='+' || copy[l-1]=='-' || copy[l-1]=='x'|| copy[l-1]=='/';
            if(l>0 && !negative){
                num1_s = full_s.slice(0,l);
                num2_s = full_s.slice(l+1);
                too_many_d = too_many_dots(num2_s);
                too_many_d = too_many_dots(num1_s);
    
                if (too_many_d == true){
                    found=true;
                    break;
                }
    
                too_many_d = too_many_dots(num2_s);
                if (too_many_d == true){
                    found=true;
                    break;
                }
                num1 = Number(num1_s);
                num2 = Number(num2_s);
            sol =sub(num1,num2);
            found = true;
            op_num = op_num+1;
            }
    
        }else if (letter == 'x'){
            num1_s = full_s.slice(0,l);
            num2_s = full_s.slice(l+1);
            too_many_d = too_many_dots(num2_s);
            too_many_d = too_many_dots(num1_s);

            if (too_many_d == true){
                found=true;
                break;
            }

            too_many_d = too_many_dots(num2_s);
            if (too_many_d == true){
                found=true;
                break;
            }
            num1 = Number(num1_s);
            num2 = Number(num2_s);
            sol =mult(num1,num2);
            found = true;
            op_num = op_num+1;

        }else if (letter == '/'){
            num1_s = full_s.slice(0,l);
            num2_s = full_s.slice(l+1);
            too_many_d = too_many_dots(num2_s);
            too_many_d = too_many_dots(num1_s);

            if (too_many_d == true){
                found=true;
                break;
            }

            too_many_d = too_many_dots(num2_s);
            if (too_many_d == true){
                found=true;
                break;
            }
            num1 = Number(num1_s);
            num2 = Number(num2_s);
            sol=div(num1,num2).toFixed(4);
            found = true;
            op_num = op_num+1;
        }
    }

    if (found == false){
        alert("You need an operator!");
    }
    if (op_num >1){
        alert("You can only have one operator at a time!");
    }
    if (too_many_d == true){
        alert("too many dots!");
        }

    document.getElementById('disp').innerHTML=sol;
    found = false;
}

//Add event listeners to all the buttons
let small_button= document.querySelectorAll('.small_button');
Array.from('small_button');

let d = document.getElementById('disp');

//Add an event listener to every number & operator
for(let j = 0; j<small_button.length; j++){
    let s = small_button[j];
    let message = s.value;
    s.addEventListener('click',()=>{
        d.innerHTML = d.innerHTML + message;
    })
}

//add event listener to = and start calculation
let equal = document.getElementById('equal');
equal.addEventListener('click',()=>{
    let display_message = document.getElementById('disp').innerText;
    operate(display_message);
})

//error message if there is already one operator and you try to add another one

//event listener to clear
let clearing = document.getElementById('clear');
clearing.addEventListener('click',()=>{
    cl(d);
})

let dele = document.getElementById('delete');
dele.addEventListener('click',()=>{
    del(d);
})