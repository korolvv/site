'use strict';

window.addEventListener('DOMContentLoaded', function () {

    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const closeElem = document.querySelector('.menu__close');
    const menuLinks = document.querySelectorAll('.menu__link');


    hamburger.addEventListener('click', () => {
        menu.classList.add('active');

    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });


    menuLinks.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });


    const counters = document.querySelectorAll('.percent__item-percent'),
        lines = document.querySelectorAll('.percent__item-line-main');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    // FORM

    const form = document.querySelector('form');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const textarea = document.querySelector('#text');
    const checkBox = document.querySelector('input[type = checkbox]');


    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        if (name.validity.valid && email.validity.valid && textarea.validity.valid && checkBox.checked) {
            form.classList.add('sending');

            let formData = new FormData(form);

            let response = await fetch('/mailer/smart.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                let result = await response;
                form.reset();
                form.classList.remove('sending');

            } else {
                alert('Ошибка отправки');
                form.classList.remove('sending');
            }
        }
    }

    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    const portfolioItem1 = document.querySelector('.portfolio__item_1');
    const portfolioItem2 = document.querySelector('.portfolio__item_2');
    const portfolioItem3 = document.querySelector('.portfolio__item_3');
    const portfolioItem4 = document.querySelector('.portfolio__item_4');
    const portfolioItem5 = document.querySelector('.portfolio__item_5');

    portfolioItem1.addEventListener('mouseover', () => {
        portfolioItem1.style.filter = 'brightness(1)';
        portfolioItem2.style.filter = 'brightness(0.5)';
        portfolioItem3.style.filter = 'brightness(0.5)';
        portfolioItem4.style.filter = 'brightness(0.5)';
        portfolioItem5.style.filter = 'brightness(0.5)';
    });
    portfolioItem1.addEventListener('mouseout', () => {
        portfolioItem1.style.filter = 'brightness(1)';
        portfolioItem2.style.filter = 'brightness(1)';
        portfolioItem3.style.filter = 'brightness(1)';
        portfolioItem4.style.filter = 'brightness(1)';
        portfolioItem5.style.filter = 'brightness(1)';
    });
    portfolioItem2.addEventListener('mouseover', () => {
        portfolioItem1.style.filter = 'brightness(0.5)';
        portfolioItem2.style.filter = 'brightness(1)';
        portfolioItem3.style.filter = 'brightness(0.5)';
        portfolioItem4.style.filter = 'brightness(0.5)';
        portfolioItem5.style.filter = 'brightness(0.5)';
    });
    portfolioItem2.addEventListener('mouseout', () => {
        portfolioItem1.style.filter = 'brightness(1)';
        portfolioItem2.style.filter = 'brightness(1)';
        portfolioItem3.style.filter = 'brightness(1)';
        portfolioItem4.style.filter = 'brightness(1)';
        portfolioItem5.style.filter = 'brightness(1)';
    });
    portfolioItem3.addEventListener('mouseover', () => {
        portfolioItem1.style.filter = 'brightness(0.5)';
        portfolioItem2.style.filter = 'brightness(0.5)';
        portfolioItem3.style.filter = 'brightness(1)';
        portfolioItem4.style.filter = 'brightness(0.5)';
        portfolioItem5.style.filter = 'brightness(0.5)';
    });
    portfolioItem3.addEventListener('mouseout', () => {
        portfolioItem1.style.filter = 'brightness(1)';
        portfolioItem2.style.filter = 'brightness(1)';
        portfolioItem3.style.filter = 'brightness(1)';
        portfolioItem4.style.filter = 'brightness(1)';
        portfolioItem5.style.filter = 'brightness(1)';
    });
    portfolioItem4.addEventListener('mouseover', () => {
        portfolioItem1.style.filter = 'brightness(0.5)';
        portfolioItem2.style.filter = 'brightness(0.5)';
        portfolioItem3.style.filter = 'brightness(0.5)';
        portfolioItem4.style.filter = 'brightness(1)';
        portfolioItem5.style.filter = 'brightness(0.5)';
    });
    portfolioItem4.addEventListener('mouseout', () => {
        portfolioItem1.style.filter = 'brightness(1)';
        portfolioItem2.style.filter = 'brightness(1)';
        portfolioItem3.style.filter = 'brightness(1)';
        portfolioItem4.style.filter = 'brightness(1)';
        portfolioItem5.style.filter = 'brightness(1)';
    });
    portfolioItem5.addEventListener('mouseover', () => {
        portfolioItem1.style.filter = 'brightness(0.5)';
        portfolioItem2.style.filter = 'brightness(0.5)';
        portfolioItem3.style.filter = 'brightness(0.5)';
        portfolioItem4.style.filter = 'brightness(0.5)';
        portfolioItem5.style.filter = 'brightness(1)';
    });
    portfolioItem5.addEventListener('mouseout', () => {
        portfolioItem1.style.filter = 'brightness(1)';
        portfolioItem2.style.filter = 'brightness(1)';
        portfolioItem3.style.filter = 'brightness(1)';
        portfolioItem4.style.filter = 'brightness(1)';
        portfolioItem5.style.filter = 'brightness(1)';
    });
});