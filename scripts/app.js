// Id's
let colorBtn = document.getElementById("colorBtn");
let resetBtn = document.getElementById("resetBtn");

let userInputColor = document.getElementById("userInputColor");
let userBoxInput = document.getElementById("userBoxInput");

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");

let userColor = '';
let userBox = '';

colorBtn.addEventListener("click", function(event){
    userColor = userInputColor.value;
    userBox = userBoxInput.value;
    console.log(userBox + userColor);

    if(userBox == 1){
        box1.style.backgroundColor = userColor;
    }else if(userBox == 2){
        box2.style.backgroundColor = userColor;
    }else if(userBox == 3){
        box3.style.backgroundColor = userColor;
    }else if(userBox == 4){
        box4.style.backgroundColor = userColor;
    }else if(userBox == 5){
        box5.style.backgroundColor = userColor;
    }else if(userBox == 6){
        box6.style.backgroundColor = userColor;
    }else if(userBox == 7){
        box7.style.backgroundColor = userColor;
    }else if(userBox == 8){
        box8.style.backgroundColor = userColor;
    }else{
        console.log("There's a problem.");
    }
});

resetBtn.addEventListener('click', function(event){
    window.location.reload();
});









// box1.style.backgroundColor = 'userColor';