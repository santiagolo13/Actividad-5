const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Simula una base de datos de usuarios
const users = [
    {
        email: "joselopezromero2020@gmail.com",
        passwordHash: bcrypt.hashSync("santiago1997", 10) // Hash de la contraseña
    }
];

// Ruta de inicio de sesión
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Verificar usuario
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(400).send('Correo o contraseña incorrectos');
    }

    // Verificar contraseña
    const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);
    if (!isPasswordValid) {
        return res.status(400).send('Correo o contraseña incorrectos');
    }

    // Generar un JWT
    const token = jwt.sign({ email: user.email }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
