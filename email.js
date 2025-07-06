// Function to send email
function sendemail() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Check if any of the required fields are empty
  if (email === "" || name === "" || subject === "" || message === "") {
    window.alert("Please fill in all the fields.");
    return; // Stop execution if any field is empty
  }

  var templateParams = {
    email: email,
    from_name: name,
    subject: subject,
    message: message
  };

  emailjs.send('service_1cef6kp', 'template_qw4j6j5', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      window.alert("Sent successfully!");
    })
    .catch(function(error) {
      console.error('FAILED...', error);
      window.alert("Failed to send email!");
    });
}

// Remove the event listener from the button with class .btn
document.addEventListener('DOMContentLoaded', function() {
  var sendButton = document.querySelector('.btn');
  sendButton.removeEventListener('click', function(event) {
    event.preventDefault();
    sendemail();
  });
});
