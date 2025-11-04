const express = require('express');
const router = express.Router();
const { compute } = require('../services/calcules');


router.post('/', (req, res) => {
try {
const { a, b, op } = req.body;
const result = compute(a, b, op);
return res.json({ result });
} catch (err) {
return res.status(400).json({ error: err.message });
}
});


module.exports = router;