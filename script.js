
//! SIDE NAV BURGER MENU MOBILE
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

//! CONTACT ME EMAIL DIRECT 
function sendMail() {
    // Get input values
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    //fields cannot be empty 
if (!params.from_name || !params.email_id || !params.message) {
    alert("Please fill out all fields before sending.");
    return;   
}

   
    emailjs.send("service_h79eebo", "template_jiiq2vp", params)
        .then(function(res) {
            
            alert("Message sent" );
        })
        .catch(function(error) {
           
            alert("Failed to send email. Error: " + JSON.stringify(error));
        });
}
