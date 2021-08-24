$(document).ready(function () {
    
    // -------------------------------------------------- Получаем дата атрибут в svg
    let floorPath = $('.home__image path');
    let currentFloor = 2;
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