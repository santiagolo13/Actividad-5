function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar lógica de validación de correo y contraseña
    if (email === "joselopezromero2020@gmail.com" && password === "santiago1997") {
        // Redirigir a la página de inventario si la validación es exitosa
        window.location.href = "/http://127.0.0.1:3002/carpeta.html/index.html"; // Cambia esta ruta por la de tu página de inventario
        return false; // Evitar el envío del formulario
    } else {
        alert('Correo o contraseña incorrectos.');
        return false; // Evitar el envío del formulario
    }
    
}
