// other controller
const obat = require('./obatcontrollers')
const supplier = require('./suppliercontrollers')
const karyawan = require('./karyawancontrollers')
const pelanggan = require('./pelanggancontrollers')
const faktursupply = require('./faktursupplycontrollers')
const fakturpenjualan = require('./fakturpenjualancontrollers')

module.exports = {
    obat,
    supplier,
    karyawan,
    pelanggan,
    faktursupply,
    fakturpenjualan
}