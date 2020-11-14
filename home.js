let btn_zero  = document.getElementById('zero');
let btn_one   = document.getElementById('one');
let btn_two   = document.getElementById('two');
let btn_three = document.getElementById('three');
let btn_four  = document.getElementById('four');
let btn_five  = document.getElementById('five');
let btn_six   = document.getElementById('six');
let btn_seven = document.getElementById('seven');
let btn_eight = document.getElementById('eight');
let btn_nine  = document.getElementById('nine');
let btn_dot   = document.getElementById('dot');

let btn_divide   = document.getElementById('divide');
let btn_multiply = document.getElementById('multiply');
let btn_plus     = document.getElementById('plus');
let btn_minus    = document.getElementById('minus');

let btn_clear    = document.getElementById('clear');
let btn_clearall = document.getElementById('clearall');
let btn_cube     = document.getElementById('cube');
let btn_square   = document.getElementById('square');

let btn_equal    = document.getElementById('equal');
let txt_input    = document.getElementById('input');


btn_zero.addEventListener('click',()=>{
    remove_zero();
    txt_input.value += "0"
}
);
btn_one.addEventListener('click', ()=>{
    remove_zero();

    txt_input.value += "1";
});
btn_two.addEventListener('click', ()=>{
    remove_zero();

    txt_input.value += "2";
});
btn_three.addEventListener('click', ()=>{
    remove_zero();

    txt_input.value += "3";
});
btn_four.addEventListener('click', ()=>{
    remove_zero();

    txt_input.value += "4";
});
btn_five.addEventListener('click', ()=>{
    remove_zero();

    txt_input.value += "5";
});
btn_six.addEventListener('click', ()=>{
    remove_zero();

    txt_input.value += "6";
});
btn_seven.addEventListener('click', ()=>{
    remove_zero();

    txt_input.value += "7";
});
btn_eight.addEventListener('click', ()=>{
    remove_zero();

    txt_input.value += "8";
});
btn_nine.addEventListener('click', ()=>{
    remove_zero();

    txt_input.value += "9";
});
btn_dot.addEventListener('click', ()=>{
    remove_zero();

    txt_input.value += ".";
});

btn_divide.addEventListener('click', (event)=>{
    console.log(event.target.value);
    txt_input.value += "/";
});
btn_multiply.addEventListener('click', ()=>{
    txt_input.value +=  "*";
});
btn_plus.addEventListener('click', ()=>{
    txt_input.value += "+";
});
btn_minus.addEventListener('click', ()=>{
    txt_input.value += "-";
});

btn_clear.addEventListener('click', ()=>{
    let str = txt_input.value;
    txt_input.value = str.length === 0? "0" : str.substring(0, str.length-1);
});
btn_clearall.addEventListener('click', ()=>{
    txt_input.value = "0";
});
btn_cube.addEventListener('click', ()=>{
    try{
        txt_input.value = Math.pow(eval(txt_input.value), 3);
    }catch(e){ txt_input.value = "Error"}
    
});
btn_square.addEventListener('click', ()=>{
    try{
        txt_input.value = Math.pow(eval(txt_input.value), 2);
    }catch(e){ txt_input.value = "Error"}
});

btn_equal.addEventListener('click', ()=>{
    try{
        txt_input.value = eval(txt_input.value);
    }catch(e){
        txt_input.value = "0";
        alert("Error: Invalid Operation.");
    }
});

function remove_zero(){
    let length = txt_input.value.length;
    if(length === 1 && txt_input.value === '0'){
        txt_input.value = "";
    }
}
