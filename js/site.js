function CheckEmailFormat(){
    const emailInput = document.getElementById("email");

    emailInput.addEventListener("input", function () {
        const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            message.textContent = "This is an invalid email format, please make sure an @ is included.";
            message.style.color = "red";
        } else {
            message.textContent = "";
        }
    });
};