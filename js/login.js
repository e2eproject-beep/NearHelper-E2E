function loginUser() {
    const mobile = document.getElementById("mobile").value.trim();
    const pin = document.getElementById("pin").value.trim();
    const error = document.getElementById("error");

    error.textContent = "";

    if (mobile.length !== 10 || isNaN(mobile)) {
        error.textContent = "Enter a valid 10-digit mobile number.";
        return;
    }

    if (pin.length !== 4 || isNaN(pin)) {
        error.textContent = "Enter a valid 4-digit PIN.";
        return;
    }

    const savedPIN = localStorage.getItem("workerPIN_" + mobile);
    const registered = localStorage.getItem("workerREGISTERED_" + mobile);

    if (!registered) {
        error.textContent = "Mobile number not registered.";
        return;
    }

    if (savedPIN !== pin) {
        error.textContent = "Incorrect PIN.";
        return;
    }

    // Successful login
    localStorage.setItem("active_user", mobile);
    window.location.href = "worker-dashboard.html";
}

function forgotPin() {
    const mobile = document.getElementById("mobile").value.trim();
    const error = document.getElementById("error");

    if (mobile.length !== 10 || isNaN(mobile)) {
        error.textContent = "Enter mobile number first.";
        return;
    }

    const registered = localStorage.getItem("workerREGISTERED_" + mobile);

    if (!registered) {
        error.textContent = "Mobile number not registered.";
        return;
    }

    // Set mode
    localStorage.setItem("temp_mobile", mobile);
    localStorage.setItem("flow_mode", "forgot");

    window.location.href = "verification.html";
}

function goRegister() {
    window.location.href = "registration-mobile.html";
}
