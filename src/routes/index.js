const router = require('express').Router();
// another route below this line
const obatRoute = require('./obat');
const supplierRoute = require('./supplier');
const karyawanRoute = require('./karyawan');
const pelangganRoute = require('./pelanggan');
const faktursupplyRoute = require('./faktursupply');
const fakturpenjualanRoute = require('./fakturpenjualan');

// other route
router.use('/obat', obatRoute);
router.use('/supplier', supplierRoute);
router.use('/karyawan', karyawanRoute);
router.use('/pelanggan', pelangganRoute);
router.use('/fakturpenjualan', fakturpenjualanRoute);
router.use('/faktursupply', faktursupplyRoute);

module.exports = router;