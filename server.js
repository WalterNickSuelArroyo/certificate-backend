const express = require('express');
const cors = require('cors');
const certificateRoutes = require('./routes/certificates');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', certificateRoutes);

// Configuración del servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
