const express = require('express');
const router = express.Router();
const { getCertificateByCode } = require('../controllers/certificateController');

// Ruta para verificar un certificado por código
router.get('/verify/:code', getCertificateByCode);

module.exports = router;
