/**
 * Created by rbaryla on 09.01.2017.
 */

window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // There is nothing to do
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');

});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {

  if (e.propertyName !== 'transform')  {
      return; // There is nothing to do
  }
  this.classList.remove('playing');
};