//Moja pierwsza wersja rozwiązania


document.addEventListener('DOMContentLoaded', function() {

    var divs = document.querySelectorAll('.key');
    function removeTransition() {
        if (event.propertyName !== 'transform') {
            return
        }
        this.classList.remove('playing');
    }

    for (var i=0; i<divs.length; i++) {
        divs[i].addEventListener('transitionend', removeTransition);
    }

    function playSound() {
        var key = event.keyCode;
        var div = document.querySelector(`div[data-key="${key}"]`);
        var audio = document.querySelector(`audio[data-key="${key}"]`);
        if (!audio) {
            return
        }
        div.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }
    
    window.addEventListener('keydown', playSound);

});

