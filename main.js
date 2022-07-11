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