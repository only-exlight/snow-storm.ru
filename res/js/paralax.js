let body = document.getElementById('body');

window.onscroll = function(){
    body.style.backgroundPosition = "0px -" + window.pageYOffset/5 + 'px ';
}