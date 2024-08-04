// ! COMMENTS
// ? COMMENTS
// TODO COMMENTS
// * COMMENTS
// COMMENTS
let x = 10 // Pressing ctrl + alt + L 
console.log("🚀 ~ x:", x)
// ! ==============================
// ! ==============================
let valueDisplay = document.querySelectorAll('.num');
let interval = 500;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = valueDisplay.getAttribute('data-val');
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
