
const originalArray = [2, 8, 32, 128, 512, 2048];
const newArray = [];


for (let i = originalArray.length - 1; i >= 0; i--) {
    if (originalArray[i] === 512 || originalArray[i] === 128 || originalArray[i] === 32 || originalArray[i] === 8) {
      newArray.push(originalArray[i]);
    }
}
console.log("Original Array:", originalArray);
console.log("New Array:", newArray);


const modal = document.getElementById("myModal");
const buttons = document.querySelectorAll("button"); // Change the selector to select all buttons
const modalMessage = document.getElementById("modal-message");
const modalDescription = document.getElementById("modal-description");

function openModal(button) {
    modalMessage.textContent = "This is modal window.";
    modalDescription.textContent = button.getAttribute("data-description");
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        openModal(button);
    });
});

const closeBtn = modal.querySelector(".close");
closeBtn.addEventListener("click", closeModal);