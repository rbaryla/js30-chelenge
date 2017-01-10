/**
 * Created by rbaryla on 09.01.2017.
 */

// Bootstrap
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSounds);

/////////////////////////////////////////////////////

/**
 * Function play sound if event.keyCode is in audio elements
 * @param e Event
 */
function playSounds(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // There is nothing to do
    audio.currentTime = 0;
    audio.play();

    if (key.classList.contains('playing')) {
        key.classList.remove('playing');
        return;
    }
    key.classList.add('playing');
}

/**
 * Function removes class playing, function is triggered after transition end
 * @param e Event
 */
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // There is nothing to do

  this.classList.remove('playing');
}
