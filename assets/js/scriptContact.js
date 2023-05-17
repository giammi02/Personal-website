//initialization emailJS service
(function () {
    emailjs.init('_HWVM4cS9nTqwC33w');
})();


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let submitMessage = document.querySelector("[data-submit-message]");
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_001', 'template_02xj607', this)
            .then(function () {
                let name = document.querySelector("[data-name]");
                let email = document.querySelector("[data-email]");
                let message = document.querySelector("[data-message]");
                //clear inputs
                name.value="";
                email.value="";
                message.value="";

                submitMessage.style.cssText= "color: rgba(240, 240, 240)";
                submitMessage.innerHTML="The message has been successfully sent!";
            }, function (error) {
                submitMessage.style.cssText= "color: rgba(252, 39, 39, 0.9)";
                submitMessage.innerHTML="Sorry, a problem occurred, the message hasn't been sent!";
                submitMessage.scrollIntoView();
            });
    });

