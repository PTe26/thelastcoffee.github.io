let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});

// Agregar este script al final del body o enlazar a un archivo externo

document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos de enlace de idioma
    const languageLinks = document.querySelectorAll(".language-link");

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        // Aquí puedes agregar lógica para cambiar el contenido según el idioma seleccionado
        // Por ejemplo, cambiar el texto de los elementos existentes, cargar diferentes datos, etc.
        alert("Cambiando a " + lang);
    }

    // Agregar un evento de clic a cada enlace de idioma
    languageLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const selectedLang = this.getAttribute("data-lang");
            changeLanguage(selectedLang);
        });
    });
});
