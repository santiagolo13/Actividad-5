document.getElementById("loginForm").addEventListener("submit", function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Evitar que el formulario se envíe si hay un error
    if (!isValidEmail(email)) {
        alert('Correo electrónico no válido.');
        event.preventDefault();  // Prevenir el envío del formulario
    } else if (!isValidPassword(password)) {
        alert('Contraseña no válida.');
        event.preventDefault();  // Prevenir el envío del formulario
    }
});

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function isValidPassword(password) {
    return password.length >= 8;  // Ejemplo de validación más fuerte
}
