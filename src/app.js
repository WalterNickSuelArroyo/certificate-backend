const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const certificateRoutes = require('./routes/certificateRoutes');

// Configurar servidor
const app = express();
app.use(cors({
  origin: 'https://certificate-frontend-nine.vercel.app/'
}));
app.use(bodyParser.json());

// Rutas
app.use('/api/certificates', certificateRoutes);

// Puerto y arranque
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
