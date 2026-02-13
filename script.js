// Use const because these element references should not change.
const countDisplay = document.getElementById("count");
// Use const because this button reference should not change.
const increaseButton = document.getElementById("increase");
// Use const because this button reference should not change.
const decreaseButton = document.getElementById("decrease");

let count = 0;

function updateDisplay() {
	countDisplay.textContent = "" + count;
}

increaseButton.addEventListener("click", function () {
	count = count + 1;
	updateDisplay();
});

decreaseButton.addEventListener("click", function () {
	count = count - 1;
	updateDisplay();
});

updateDisplay();
