
// Js code for Login Button

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click",function(event){
    event.preventDefault();
    const inputNumber = document.getElementById("input-number");
    const inputPin = document.getElementById("input-pin");
    if (inputNumber.value.length === 11) {
        if (inputPin.value.length === 4) {
            window.location.href="welcome.html"   
        }
        else{
            alert('Invalid pin');
        }
    }
    else{
        alert('Invalid Account Number');
    }
    
})