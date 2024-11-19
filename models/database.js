const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',       // Dirección del servidor de MySQL
    user: 'root',            // Usuario de MySQL
    password: '1234',    // Contraseña de MySQL
    database: 'certificates_db' // Nombre de tu base de datos
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = connection;
