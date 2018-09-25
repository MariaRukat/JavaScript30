document.addEventListener('DOMContentLoaded', function() {

    const boxes = document.querySelectorAll('.key');

    const playing = (e) => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) {return}
        audio.currentTime = 0;
        audio.play();
        const box = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        box.classList.add('playing');        
    }

    const removeTransition = (e) => {
        if (e.propertyName !== 'transform') {return}       
        e.target.classList.remove('playing');
    };

    boxes.forEach( box => box.addEventListener('transitionend', removeTransition) );
    window.addEventListener('keydown', playing);

});

