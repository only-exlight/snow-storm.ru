$(document).ready(function () {
    var doc = document,
        slider = doc.getElementById('slider'),
        navRound = doc.querySelectorAll('.round'),
        slRadio = doc.querySelectorAll('.sl-nav'),
        tringleL = doc.getElementById('tringle-l'),
        text = doc.getElementById('slText'),
        slRadioForm = doc.getElementById('slRadioBut'),
        tringleR = doc.getElementById('tringle-r');

    var curItem = 0,
        timer;
    autoSwith();

    navRound[0].onmouseover = function () {
        navRound[0].style.background = '#009dff';
        navRound[0].style.boxShadow = '0 0 5px #009dff';

    }
    navRound[1].onmouseover = function () {
        navRound[1].style.background = '#009dff';
        navRound[1].style.boxShadow = '0 0 5px #009dff';
    }
    navRound[2].onmouseover = function () {
        navRound[2].style.background = '#009dff';
        navRound[2].style.boxShadow = '0 0 5px #009dff';
    }

    navRound[0].onmouseout = function () {
        navRound[0].style.background = '#fff';
        navRound[0].style.boxShadow = '';

    }
    navRound[1].onmouseout = function () {
        navRound[1].style.background = '#fff';
        navRound[1].style.boxShadow = '';
    }
    navRound[2].onmouseout = function () {
        navRound[2].style.background = '#fff';
        navRound[2].style.boxShadow = '';
    }

    /*
    Навигация слайдера
    ==================*/
    navRound[0].onclick = function () {
        curItem = 0;
        clearTimeout(timer);
        SliderContent();
        autoSwith();
    }

    navRound[1].onclick = function () {
        curItem = 1;
        clearTimeout(timer);
        SliderContent();
        autoSwith();
    }

    navRound[2].onclick = function () {
        curItem = 2;
        clearTimeout(timer);
        SliderContent();
        autoSwith();
    }

    /*
    Треугольники
    ============*/
    tringleL.onclick = function () {
        curItem--;
        if (curItem < 0) curItem = 2;
        clearTimeout(timer);
        SliderContent();
        autoSwith();
    }

    tringleR.onclick = function () {
        curItem++;
        if (curItem >= 3) curItem = 0;
        clearTimeout(timer);
        SliderContent();
        autoSwith();
    }

    /*
    Автопереключение слайдера
    =========================*/

    function autoSwith() {
        timer = setInterval(function () {
            curItem++;
            if (curItem >= 3) curItem = 0;
            SliderContent();
        }, 8000);
    };



    /*Контент слайдера*/
    function SliderContent() {
        if (curItem == 0) {
            slider.style.background = 'url(res/img/sl0.jpg)';
            slider.style.backgroundSize = 'cover';
            navRound[0].style.background = '#009dff';
            navRound[0].style.boxShadow = '0 0 5px #009dff';
            text.innerHTML = '';
            text.innerHTML = '<h1>Год группе в ВК</h1><br><span>15 декабря 2015 была создана та самая группа в ВК и придуман nickname "Snow Storm", и понеслась... Чесно сказать тогда даже и не планировал писать что то или создавать музыку. Как то так вышло.</span><br><br><a href="#art/30">Читать подробнее...</a>';
        } else {
            navRound[0].style.background = '#fff';
            navRound[0].style.boxShadow = '';
        }

        if (curItem == 1) {
            slider.style.background = 'url(res/img/sl1.jpg)';
            slider.style.backgroundSize = 'cover';
            navRound[1].style.background = '#009dff';
            navRound[1].style.boxShadow = '0 0 5px #009dff';
            text.innerHTML = '';
            text.innerHTML = '<h1>Обновление на сайте!</h1><br><span> Добро пожаловать на обновленный сайт! Наконец то основной функционал сайта реализован, и можно наконец то показать его всем. Так же сайт переехал на более короткий и лаконичный домен www.snow-storm.ru!</span><br><br><a href="#art/31">Читать подробнее...</a>';

        } else {
            navRound[1].style.background = '#fff';
            navRound[1].style.boxShadow = '';
        }

        if (curItem == 2) {
            slider.style.background = 'url(res/img/sl2.jpg)';
            slider.style.backgroundSize = 'cover';
            navRound[2].style.background = '#009dff';
            navRound[2].style.boxShadow = '0 0 5px #009dff';
            text.innerHTML = '';
            text.innerHTML = '<h1>Моя осень</h1><br><span>За окном то же небо, под ногами те же желтые листы<br>Все так же люди строят или разрушают свои мосты<br>Вокруг меня все тот же мир, и все давно привычно,<br>Но эта осень как она чем то не обычна</span><br><br><a href="#art/25">Читать подробнее...</a>';
        } else {
            navRound[2].style.background = '#fff';
            navRound[2].style.boxShadow = '';
        }
    }
})