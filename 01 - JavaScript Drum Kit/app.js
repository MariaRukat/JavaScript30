//Moja pierwsza wersja rozwiązania


document.addEventListener('DOMContentLoaded', function() {

    var keysDivs = document.querySelectorAll('.key');
    var audios = document.querySelectorAll('audio');

    window.addEventListener('keydown', function() {
        var key = event.keyCode;

        for (var i=0; i<keysDivs.length; i++) {
            if (key == keysDivs[i].dataset.key) {
                keysDivs[i].classList.add('playing');
            }
        }

        for (var i=0; i<audios.length; i++) {
            if (key == audios[i].dataset.key) {
                audios[i].currentTime = "0";
                audios[i].play();
            }

        }

    });

    for (var i=0; i<keysDivs.length; i++) {
        keysDivs[i].addEventListener('transitionend', function() {
            if (event.propertyName !== 'transform') {
                return
            }
            this.classList.remove('playing');
        })
    }

});

