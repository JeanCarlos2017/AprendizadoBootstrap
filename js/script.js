$( document ).ready(function() {
    // Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#aaa'},
        to: { color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 60);
            circle.setText(value);

        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#aaa'},
        to: { color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 254);
            circle.setText(value);

        }

    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#aaa'},
        to: { color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 32);
            circle.setText(value);

        }

    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#aaa'},
        to: { color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            var value = Math.round(circle.value() * 5423);
            circle.setText(value);

        }
    });

    // iniciando loaders quando a usuário chegar no elemento
    let dataAreaOffset = $('#data-area').offset();
    // stop serve para a animação não carregar mais que uma vez
    let stop = 0;

    $(window).scroll(function (e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }

    });

    // Parallax

    // setTimeout serve para carregar primeiro as imagens
    setTimeout(function() {
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
    }, 200);

    // Filtro portfólio

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');
        let string_type = type.replace('-btn', ''); //obter a classe de acordo com o descrito no html

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        eachBoxes(string_type, boxes);


    });

    function eachBoxes(type, boxes) {

        if(type === 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }

    // scroll para as seções

    let navBtn = $('.nav-item');
    let scrollTo = '';

    $(navBtn).click(function() {

        let btnId = $(this).attr('id');
        let divId = '';
        //console.log(btnId);

        // através do id do botão é descoberto a id da seção que o usuário deseja ir
        if (btnId === 'home-menu'){
            divId = '#mainSlider';
        }else {
            // através do id do botão eu descubro o id da seção que contem o conteúdo desejado
            divId = '#' + btnId.replace('menu', 'area');

        }
        //redireciona o usuário para a seção
        scrollTo = $(divId);


        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);

    });

});

