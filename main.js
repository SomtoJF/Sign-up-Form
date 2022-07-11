//TYPEWRITER EFFECT
let canvas = document.getElementById('typewriter');
let words = 'Not an actual Service.';
words = words.split('');
console.log(words);
let i = 0;
function typewriter(){
    if(i < words.length){
    canvas.textContent += words[i];
    i++;
    setTimeout(typewriter, 100);
    };
};
typewriter();

// PASSWORD CHECK
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');

function passwordCheck() {
    if(password.value == confirmPassword.value){
        password.style.border = 'solid green';
        confirmPassword.style.border = 'solid green';
    }
    else{
        password.style.border = 'solid red';
        confirmPassword.style.border = 'solid red';
    }
}
password.addEventListener('keyup', passwordCheck);
confirmPassword.addEventListener('keyup', passwordCheck);