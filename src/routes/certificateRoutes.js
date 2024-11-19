const express = require('express');
const pool = require('../db/pool');

const router = express.Router();

// Obtener detalles de un certificado por código
router.get('/:code', async (req, res) => {
  const { code } = req.params;

  try {
    const result = await pool.query(
      'SELECT full_name, certificate_name, issue_date, expiry_date, status, pdf_url FROM certificates WHERE code = $1',
      [code]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Certificado no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al consultar el certificado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener el PDF de un certificado por código
router.get('/:code/pdf', async (req, res) => {
  const { code } = req.params;

  try {
    const result = await pool.query(
      'SELECT pdf_url FROM certificates WHERE code = $1',
      [code]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'PDF no encontrado' });
    }

    const pdfUrl = result.rows[0].pdf_url;
    res.redirect(pdfUrl); // Redirigir al enlace del PDF
  } catch (error) {
    console.error('Error al obtener el PDF:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
