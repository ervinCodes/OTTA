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
}

// Close modal 
closeModalBtn.onclick = function () {
    modal.classList.add("hidden");
    // document.body.classList.remove("no-scroll");
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

// Function to check if both checkboxes are checked
function updateAcceptBtnState() {
    acceptBtn.disabled = !(termsCheck.checked && privacyCheck.checked);
}

// Add event listeners to both checkboxes to update the button state
termsCheck.addEventListener('change', updateAcceptBtnState);
privacyCheck.addEventListener('change', updateAcceptBtnState);

// Initially check the state in case both checkboxes are already checked
updateAcceptBtnState();