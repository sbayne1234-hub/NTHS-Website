// =========================
// CONTACT PAGE
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Stop the page from refreshing
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Check that all fields have information
        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {
            alert("Please complete all fields before sending your message.");
            return;
        }

        // Show success message
        contactForm.innerHTML = `
            <h2>Message Sent!</h2>
            <p>
                Thank you, ${name}! Your message has been received.
                Someone from NTHS will get back to you soon.
            </p>
        `;
    });

}