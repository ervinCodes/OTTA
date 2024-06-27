const modal = document.getElementById("userAgreementModal");
const btn = document.getElementById("registerBtn");
const closeModalBtn = document.getElementById("closeModal");
const termsContent = document.getElementById('termsContent');
const agreeCheck = document.getElementById('agreeCheck');
const acceptBtn = document.getElementById('acceptBtn');

// Unhides the modal when the register button is clicked
btn.onclick = function () {
    modal.classList.remove("hidden");
    document.body.classList.add("no-scroll");
}

// Close modal 
closeModalBtn.onclick = function () {
    modal.classList.add("hidden");
    // document.body.classList.remove("no-scroll");
}

// If click occurs outside of modal, it will close
window.onclick = function (event) {
    if (event.target === modal) {
        modal.classList.add("hidden");
        // document.body.classList.remove("no-scroll");
    }
}

// This determines whether the user has scrolled to the very bottom
termsContent.addEventListener('scroll', () => {
    if (termsContent.scrollTop + termsContent.clientHeight >= termsContent.scrollHeight) {
        agreeCheck.disabled = false;
    }
});

// Checkbox click determines state of the 
agreeCheck.addEventListener('change', function () {
    acceptBtn.disabled = !this.checked;
});
