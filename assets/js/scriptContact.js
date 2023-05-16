
(function() {
    emailjs.init('_HWVM4cS9nTqwC33w');
})();

window.onload = function() {
    if(validationForm())
    startEmailJS();
    else{

    }

}

/* **** Email JS code snippet ****
https://www.emailjs.com/docs/tutorial/creating-contact-form/ */
function startEmailJS(){
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_001', 'template_02xj607', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
//Validation contact form  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation
function validationForm(){
let name = document.querySelector("[data-name]");
let email = document.querySelector("[data-email]");
let message = document.querySelector("[data-message]");



}



