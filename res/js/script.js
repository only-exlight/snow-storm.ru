window.onload = function () {
    var doc = document,
        slider = doc.getElementById('slider'),
        navRound = doc.querySelectorAll('.round'),
        slRadio = doc.querySelectorAll('.sl-nav'),
        tingleL = doc.getElementById('tringle-l'),
        text = doc.getElementById('slText'),
        tingleR = doc.getElementById('tringle-r');

    autoSwith();

    navRound[0].onclick = function () {
        slRadio[0].checked = true;
        clearTimeout(2);
        autoSwith();
    }

    navRound[1].onclick = function () {
        slRadio[1].checked = true;
        clearTimeout(2);
        autoSwith();
    }

    navRound[2].onclick = function () {
        slRadio[2].checked = true;
        clearTimeout(2);
        autoSwith();
    }

    tingleR.onclick = function () {
        for (var i = 0; i <= 2; i++) {
            if (slRadio[i].checked) {
                break;
            }
        }
        if (i == 2) slRadio[0].checked = true;
        slRadio[i + 1].checked = true;
        clearTimeout(2);
        autoSwith();
    }

    tingleL.onclick = function () {
        for (var i = 0; i <= 2; i++) {
            if (slRadio[i].checked) {
                break;
            }
        }
        if (i == 0) slRadio[2].checked = true;
        slRadio[i - 1].checked = true;
        clearTimeout(2);
        autoSwith();
    }

    if (slRadio[0].checked) {
        slider.style.background = 'url(resurses/images/sl0.jpg)';
    }

    if (slRadio[1].checked) {
        slider.style.background = 'url(resurses/images/sl1.jpg)';
    }

    if (slRadio[2].checked) {
        slider.style.background = 'url(resurses/images/sl2.jpg)';
    }


    function autoSwith() {
        setInterval(function () {
            for (var i = 0; i <= 2; i++) {
                if (slRadio[i].checked) {
                    break;
                }
            }
            if (i == 2) {
                slRadio[0].checked = true;
                return;
            }
            slRadio[i + 1].checked = true;
        }, 4000);
    };
}



/*
====■■■■■■=============================================■■==
==■■■■■■■■■==■■====■■■==■■■■■■■■■==■■■===========■■■==■■■■=
==■■■■==■■■==■■■===■■■==■■■■■■■■■==■■■===========■■■==■■■■=
====■■■======■■■■==■■■==■■■===■■■===■■■====■====■■■===■■■■=
=====■■■■====■■■=■=■■■==■■■===■■■====■■■==■■■==■■■=====■■==
==■■■==■■■■==■■■==■=■■==■■■===■■■=====■■■■■=■■■■■==========
==■■■■■■■■■==■■■===■■■==■■■■■■■■■======■■■===■■■=======■■==
====■■■■■■===■■■===■■■==■■■■■■■■■=======■■===■■========■■==
*/


/*
====■■■■===■■===■■===■■■■■========■
===■■■■■■==■■===■■==■■■■■■■======■=■
==■■===■■==■■===■■==■■===■■=====■===■
==■■===■■==■■■■■■■==■■===■■===■■■===■■■
===■■■■■■==■■■■■■■==■■■■■■■==■■■■===■■■■
===■■■■■■==■■===■■==■■■■■■■=====■===■
=■■■===■■==■■===■■==■■===■■======■=■
■■■====■■==■■===■■==■■===■■=======■





======■
=====■■■
====■■■■■
==■■■■■■■■■
=■■■■■■■■■■■
==■■■■■■■■■
====■■■■■
=====■■■
======■

*/