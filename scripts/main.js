let gitHubButton = document.querySelector('.github');
let linkedInButton = document.querySelector('.linkedin');
let emailButton = document.querySelector('.email');
let phoneButton = document.querySelector('.phone');
let callButton = document.querySelector('.call');
let resumeButton = document.querySelector('.resume');

let shiba = document.querySelector('.shiba');
let shibaGif = document.querySelector('.shiba-gif')
let silver = document.querySelector('.silver');
let silverGif = document.querySelector('.silver-gif');
let viking = document.querySelector('.viking');
let vikingGif = document.querySelector('.viking-gif');;

let toggleSilver = () => {
    silverGif.classList.toggle('hidden')
    silver.classList.toggle('hidden')
};

let toggleShiba = () => {
    shibaGif.classList.toggle('hidden')
    shiba.classList.toggle('hidden')
};

let toggleViking = () => {
    vikingGif.classList.toggle('hidden')
    viking.classList.toggle('hidden')
};

silver.addEventListener('click', toggleSilver);
silverGif.addEventListener('click', toggleSilver);

shiba.addEventListener('click', toggleShiba);
shibaGif.addEventListener('click', toggleShiba);

viking.addEventListener('click', toggleViking);
vikingGif.addEventListener('click', toggleViking);

