document.addEventListener("DOMContentLoaded",function(){
    const email = document.getElementById("email");
    const emailError = document.createElement ("p");
    const form = document.getElementById("VideoGame");
    
    emailError.style.color = 'red';
    emailError.style.fontSize = '0.8rem';
    email.parentElement.appendChild(emailError);

    function checkemail() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov)$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = "Please enter a valid email address";
        } else {
            emailError.textContent = '';
        }
    } 

    email.addEventListener("input", checkemail);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Thank you for your intrest in Scarlet Night, your support is greatly appreciated.");
        location.reload();
    });
    
});

