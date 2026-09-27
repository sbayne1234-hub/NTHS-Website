// =========================
// CONTACT PAGE
// =========================

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        const button = contactForm.querySelector("button");

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {
            alert("Please complete all fields before sending your message.");
            return;
        }

        button.textContent = "Sending...";
        button.disabled = true;

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                contactForm.innerHTML = `
                    <h2>Message Sent!</h2>
                    <p>
                        Thank you, ${name}! Your message has been received.
                        Someone from NTHS will get back to you soon.
                    </p>
                `;
            } else {
                button.textContent = "Send Message";
                button.disabled = false;
                alert("There was a problem sending your message. Please try again.");
            }
        } catch (error) {
            button.textContent = "Send Message";
            button.disabled = false;
            alert("There was a problem sending your message. Please try again.");
        }
    });
}