//Initiates image slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 70,
        slideShadows: false,
    },
    
  });


//Sends "Have any questions?" form via asynchronous request to backend
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);

    fetch('path/to/server-side-script.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
       
        console.log(data);
    })
    .catch(error => {
        
        console.error('Error:', error);
    });
});
  

//Toggles visibility of menu
const menuIcon = document.getElementById('menuicon');
const closeIcon = document.getElementById('close-icon');
const menu = document.getElementById('menu');


menuIcon.addEventListener('click', function() {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    menu.style.display = 'block';

    
    menu.classList.add('fade-in');
});

closeIcon.addEventListener('click', function() {
    closeIcon.style.display = 'none';
    menu.style.display = 'none';
    menuIcon.style.display = 'block';

    
    menu.classList.remove('fade-in');
});


window.addEventListener('scroll', function() {
    closeIcon.style.display = 'none';
    menu.style.display = 'none';
    menuIcon.style.display = 'block';

    
    menu.classList.remove('fade-in');
});


//Scrolling to specific part of the page from menu
const carteLink = document.getElementById('carte');
const wijnkLink = document.getElementById('wijnk');
const lunchLink = document.getElementById('lunch');
const contLink = document.getElementById('cont_click');

const yOffset = -20; 

carteLink.addEventListener('click', function() {
    menu.style.display = 'none';
    const specialsSection = document.getElementById('specials');
    if (specialsSection) {
        const yOffsetAdjusted = specialsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yOffsetAdjusted, behavior: 'smooth' });
    }
});

wijnkLink.addEventListener('click', function() {
    menu.style.display = 'none';
    const foodSection = document.getElementById('food');
    if (foodSection) {
        const yOffsetAdjusted = foodSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yOffsetAdjusted, behavior: 'smooth' });
    }
});

lunchLink.addEventListener('click', function() {
    menu.style.display = 'none';
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
        const yOffsetAdjusted = gallerySection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yOffsetAdjusted, behavior: 'smooth' });
    }
});

contLink.addEventListener('click', function() {
    menu.style.display = 'none';
    const contactSection = document.getElementById('contact_info');
    if (contactSection) {
        const yOffsetAdjusted = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yOffsetAdjusted, behavior: 'smooth' });
    }
});


//Modal form "Reserve a table"
const modalForm = document.querySelector('.modal_form');
const reserveFormCall = document.querySelector('#reserveForm_call');
const reserveFormDismiss = document.querySelector('#reserveForm_dismiss');
const reserveFormSubmit = document.querySelector('#reserveForm_submit');
const body = document.body;

function showModalForm() {
    modalForm.style.display = 'block';
    body.style.overflow = 'hidden'; 
}

function hideModalForm(event) {
    event.preventDefault();
    modalForm.style.display = 'none';
    body.style.overflow = 'auto';
}

function handleFormSubmit(event) {
    event.preventDefault(); 
    
    const formData = new FormData(document.getElementById('reserveForm'));

    fetch('path/to/server-side-script.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        hideModalForm(); 
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

reserveFormCall.addEventListener('click', showModalForm);
reserveFormDismiss.addEventListener('click', hideModalForm);
reserveFormSubmit.addEventListener('click', handleFormSubmit);

