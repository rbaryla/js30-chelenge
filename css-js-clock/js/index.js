/**
 * Created by rbaryla on 09.01.2017.
 */

// bootstrap

const secHand   = document.querySelector('.seconds');
const minHand   = document.querySelector('.minutes');
const hourHand  = document.querySelector('.hours');
const clock     = document.querySelector('.clock');

init();

//////////////////////////////

/**
 * Clock init, clock is hidden until transformation is finish
 */
function init() {
    clock.style.display ='none';
    setDate();
    clock.classList.add('animated');
    setTimeout(showClock, 550);
    setInterval(setDate, 1000);
}

/**
 * Show clock after transformation
 */
function showClock() {
    clock.style.display ='block';
}

/**
 * Function that moves clock hands
 */
function setDate() {
    const now       = new Date();
    const secTime   = now.getSeconds() + now.getMinutes() * 60 + now.getHours() * 3600;

    const hourDeg = ((secTime/43200) * 360) + 90;
    const minuDeg = ((secTime/3600) * 360) + 90;
    const secuDeg = ((secTime/60) * 360) + 90;

    hourHand.style.transform    = `rotate(${hourDeg}deg)`;
    minHand.style.transform     = `rotate(${minuDeg}deg)`;
    secHand.style.transform     = `rotate(${secuDeg}deg)`;
}

