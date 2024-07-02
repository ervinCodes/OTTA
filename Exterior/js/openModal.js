const modal = document.getElementById("userAgreementModal");
const btn = document.getElementById("registerBtn");
const closeModalBtn = document.getElementById("closeModal");
const termsContent = document.getElementById('termsContent');
const privacyContent = document.getElementById('privacyContent');
const termsCheck = document.getElementById('termsCheck');
const privacyCheck = document.getElementById('privacyCheck');
const acceptBtn = document.getElementById('acceptBtn');

privacyCheck.disabled = true;
termsCheck.disabled = true;
acceptBtn.disabled = true;

let termsScrolledToBottom = false;
let privacyScrolledToBottom = false;

// Unhides the modal when the register button is clicked
btn.onclick = function () {
    modal.classList.remove("hidden");
};

// Close modal 
closeModalBtn.onclick = function () {
    modal.classList.add("hidden");
    // document.body.classList.remove("no-scroll");
};

function checkScrollCompletion() {
    termsScrolledToBottom = termsContent.scrollTop + termsContent.clientHeight >= termsContent.scrollHeight;
    privacyScrolledToBottom = privacyContent.scrollTop + privacyContent.clientHeight >= privacyContent.scrollHeight;

    console.log(`Terms scrolled to bottom: ${termsScrolledToBottom}`);
    console.log(`Privacy scrolled to bottom: ${privacyScrolledToBottom}`);

    if (termsScrolledToBottom) {
        termsCheck.disabled = false;
    }

    if (privacyScrolledToBottom) {
        privacyCheck.disabled = false;
    }

    updateAcceptBtnState();
}

// This determines whether the user has scrolled to the very bottom on the Terms of Use
termsContent.addEventListener('scroll', checkScrollCompletion);

// This determines whether the user has scrolled to the very bottom on the Privacy Policy
privacyContent.addEventListener('scroll', checkScrollCompletion);

// Function to check if both checkboxes are checked
function updateAcceptBtnState() {
    acceptBtn.disabled = !(termsCheck.checked && privacyCheck.checked);
}

// Add event listeners to both checkboxes to update the button state
termsCheck.addEventListener('change', updateAcceptBtnState);
privacyCheck.addEventListener('change', updateAcceptBtnState);

// Initially check the state in case both checkboxes are already checked
updateAcceptBtnState();
