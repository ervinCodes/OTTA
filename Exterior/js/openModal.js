const modal = document.getElementById("userAgreementModal");
const btn = document.getElementById("registerBtn");
const closeModalBtn = document.getElementById("closeModal");
const termsContent = document.getElementById('termsContent');
const privacyContent = document.getElementById('privacyContent');
const termsCheck = document.getElementById('termsCheck');
const privacyCheck = document.getElementById('privacyCheck');
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

// This determines whether the user has scrolled to the very bottom on the Terms of Use
termsContent.addEventListener('scroll', () => {
    if (termsContent.scrollTop + termsContent.clientHeight >= termsContent.scrollHeight) {
        termsCheck.disabled = false;
    }
});

// This determines whether the user has scrolled to the very bottom on the Privacy Policy
privacyContent.addEventListener('scroll', () => {
    if (privacyContent.scrollTop + privacyContent.clientHeight >= privacyContent.scrollHeight) {
        privacyCheck.disabled = false;
    }
});

// Checkbox click determines state of the 
termsCheck.addEventListener('change', function () {
    acceptBtn.disabled = !this.checked;
});
