document.getElementById("contactForm").addEventListener("submit", function (event) {
    const fullName = document.getElementById("fullName"); 
    const email = document.getElementById("email"); 
    const phone = document.getElementById("phone"); 
    const message = document.getElementById("message"); 

    const nameError = document.getElementById("nameError"); 
    const emailError = document.getElementById("emailError"); 
    const phoneError = document.getElementById("phoneError"); 
    const messageError = document.getElementById("messageError"); 
    const successMessage = document.getElementById("successMessage"); 

    nameError.textContent = ""; 
    emailError.textContent = ""; 
    phoneError.textContent = ""; 
    messageError.textContent = ""; 
    successMessage.classList.add("hidden"); 

    let hasError = false; 

    const namePattern = /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ\s]+$/;
    if (fullName.value.trim() === "") { 
        nameError.textContent = "Це поле обов'язкове для заповнення."; 
        nameError.style.display = "block"; 
        hasError = true; 
    } else if (!namePattern.test(fullName.value)) { 
        nameError.textContent = "Ім'я може містити лише літери та пробіли."; 
        nameError.style.display = "block"; 
        hasError = true; 
    } else {
        nameError.style.display = "none"; 
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === "") { 
        emailError.textContent = "Це поле обов'язкове для заповнення."; 
        hasError = true; 
    } else if (!emailPattern.test(email.value)) { 
        emailError.textContent = "Будь ласка, введіть коректну електронну пошту (латиницею, з символом '@')."; 
        emailError.style.display = "block"; 
        hasError = true; 
    } else {
        emailError.style.display = "none"; 
    }

    const phonePattern = /^\+380\d{9}$/;
    if (phone.value.trim() === "") { 
        phoneError.textContent = "Це поле обов'язкове для заповнення."; 
        phoneError.style.display = "block"; 
        hasError = true; 
    } else if (!phonePattern.test(phone.value)) { 
        phoneError.textContent = "Будь ласка, введіть коректний номер телефону у форматі +380 ХХХ ХХХ ХХХХ."; 
        phoneError.style.display = "block"; 
        hasError = true; 
        phoneError.style.display = "none"; 
    }

    if (message.value.trim() === "") { 
        messageError.textContent = "Це поле обов'язкове для заповнення."; 
        messageError.style.display = "block"; 
        hasError = true; 
    } else {
        messageError.style.display = "none"; 
    }

    if (hasError) { 
        event.preventDefault(); 
    } else {
        successMessage.classList.remove("hidden"); 
        successMessage.textContent = "Ваше повідомлення надіслано успішно!"; 

        fullName.value = ""; 
        phone.value = ""; 
        message.value = ""; 

        event.preventDefault(); 
    }
});
