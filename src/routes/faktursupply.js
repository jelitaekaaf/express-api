const router = require('express').Router();
const { faktursupply } = require('../controllers');

// mengeluarkan semua daftar faktursupply
router.get('/', faktursupply.getDataFaktursupply);

// show data berdasarkan parameter 'id'
router.get('/:id', faktursupply.getDataFaktursupplyById);

// menambah data faktursupply
router.post('/add', faktursupply.addDataFaktursupply);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', faktursupply.editDataFaktursupply);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', faktursupply.deleteDataFaktursupply);

module.exports = router;