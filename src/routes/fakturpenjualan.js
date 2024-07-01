const router = require('express').Router();
const { fakturpenjualan } = require('../controllers');

// mengeluarkan semua daftar fakturpenjualan
router.get('/', fakturpenjualan.getDataFakturpenjualan);

// show data berdasarkan parameter 'id'
router.get('/:id', fakturpenjualan.getDataFakturpenjualanById);

// menambah data fakturpenjualan
router.post('/add', fakturpenjualan.addDataFakturpenjualan);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', fakturpenjualan.editDataFakturpenjualan);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', fakturpenjualan.deleteDataFakturpenjualan);

module.exports = router;