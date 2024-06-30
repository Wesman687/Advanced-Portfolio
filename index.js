let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1 / 20
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) document.body.classList += " dark-theme" 
    else document.body.classList.remove("dark-theme") 
}

function contact(event) {
    event.preventDefault();
    loading.classList += ' modal__overlay--visible';
    emailjs
        .sendForm(
            `service_8tasjyd`, 
            `template_m9jw80m`, 
            event.target, 
            '-oDnm3c44vAQ32-Fx'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList += ' modal__overlay--visible';
           }).catch(() => { 
            loading.classList.remove('modal__overlay--visible');
            alert(
                "The email service is temporarily unavailable. Please contact me directly at Wesman687@gmail.com"
            );
           } )
}

function toggleModal () {
    if (!isModalOpen)  { 
        isModalOpen = true
        return document.body.classList += ' modal--open'
    }
    else {
     isModalOpen = false
     return document.body.classList.remove('modal--open')
    }

}
function refreshModal() {
    success.classList.remove('modal__overlay--visible')    
}
    