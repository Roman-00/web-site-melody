$(document).ready(function () {
    
    // -------------------------------------------------- Получаем дата атрибут в svg
    let floorPath = $('.home__image path');
    let flatPath = $('.flats path');
    let flatsLink = $('.flat__link');
    let currentFloor = 2;
    let currentFlats = 02;
    let counterUp = $('.counter__up');
    let counterDown = $('.counter__down');
    let modal = $('.modal');
    let modalCloseButton = $('.modal__close--button');
    let viewFlatsButton = $('.view__flats');

    floorPath.on('mouseover', function () {

        currentFloor = $(this).attr('data-floor');
        
        // ------------------------------------------------ Записываем номер этажа на который был совершен клик
        $('.counter').text(currentFloor);

        floorPath.removeClass('current-floor');
    });

    flatsLink.on('mouseover', function () {

        currentFlats = $(this).attr('data-flat-link');
        let flatsPath = $(`.flats path[data-flat=${currentFlats}]`);

        if (currentFlats !== flatsPath) {
            flatPath.toggleClass('flat__active')
        }
    });

    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);
    

    // ------------------------------------------------ При клике на кнопки вверх и вниз смотрим на этажи
    counterUp.on('click', function () {
        
        if (currentFloor < 18) {
            currentFloor++;

            usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2, 
                useGrouping: false
            });

            $('.counter').text(usCurrentFloor);

            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    counterDown.on('click', function () {

        if (currentFloor > 2) {
            currentFloor--;

            usCurrentFloor = currentFloor.toLocaleString('en-US', {
                minimumIntegerDigits: 2, 
                useGrouping: false
            });

            $('.counter').text(usCurrentFloor);

            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }

    });

    function toggleModal() {
        modal.toggleClass('is__open');
    }

});

/*document.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const flatsPath = document.querySelectorAll('.flats path'),
        flatLink = document.querySelectorAll('.flat__link');

    flatLink.forEach(el => {

        el.addEventListener('mouseenter', (e) => {
            let target = e.currentTarget;
            let targetClass = target.getAttribute('data-flat-link');
            let currentPath = document.querySelector(`.flats path[data-flat=${targetClass}]`);

            console.log('currentPath', currentPath);
        });

    });

});*/