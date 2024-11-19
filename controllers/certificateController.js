const connection = require('../models/database');

exports.getCertificateByCode = (req, res) => {
    const { code } = req.params;

    const query = 'SELECT * FROM certificates WHERE code = ?';

    connection.query(query, [code], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            res.status(500).send('Internal server error');
        } else if (results.length === 0) {
            res.status(404).send('Certificate not found');
        } else {
            res.json(results[0]);
        }
    });
};
