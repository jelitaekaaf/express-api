const config = require('../config/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan semua data
const getDataFakturpenjualan = async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        connection.query("SELECT * FROM fakturpenjualan", function (error, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (data) {
        res.send({
            success: true,
            message: "berhasil",
            data: data
        });
    } else {
        res.send({
            success: false,
            message: "gagal",
        });
    }
}

// menampilkan data by id
const getDataFakturpenjualanById = async (req, res) => {
    let id = req.params.id;
    const data = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM fakturpenjualan WHERE id_penjualan = ?";
        connection.query(query, [id], function (err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });

    if (data.length > 0) {
        res.send({
            success: true,
            message: "berhasil",
            data: data
        });
    } else {
        res.send({
            success: false,
            message: "Data tidak ditemukan",
        });
    }
}

// menambahkan data
const addDataFakturpenjualan = async (req, res) => {
    let data = {
        id_penjualan: req.body.id_penjualan,
        tanggal: req.body.tanggal,
        id_pelanggan: req.body.id_pelanggan,
        id_karyawan: req.body.id_karyawan,
        id_obat: req.body.id_obat,
        jumlah: req.body.jumlah,
        total: req.body.total,
        pajak: req.body.pajak,
        total_bayar: req.body.total_bayar
           
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO fakturpenjualan SET ?';
        connection.query(query, [data], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil menambah data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal menambah data",
        });
    }
}

const editDataFakturpenjualan = async (req, res) => {
    let id = req.params.id_penjualan;
    let data = {
        tanggal: req.body.tanggal,
        id_pelanggan: req.body.id_pelanggan,
        id_karyawan: req.body.id_karyawan,
        id_obat: req.body.id_obat,
        jumlah: req.body.jumlah,
        total: req.body.total,
        pajak: req.body.pajak,
        total_bayar: req.body.total_bayar
    }
    const result = await new Promise((resolve, reject) => {
        const query = 'UPDATE fakturpenjualan SET ? where id_penjualan = ?';
        connection.query(query, [data, id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil edit data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal edit data",
        });
    }
}

const deleteDataFakturpenjualan = async (req, res) => {
    let id = req.params.id;

    const result = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM fakturpenjualan where id_penjualan = ?';
        connection.query(query, [id], function (err, rows) {
            if (rows) {
                resolve(rows);
            } else {
                reject([]);
            }
        });
    });

    if (result) {
        res.send({
            success: true,
            message: "berhasil hapus data",
        });
    } else {
        res.send({
            success: false,
            message: "gagal hapus data",
        });
    }
}


module.exports = {
    getDataFakturpenjualan,
    getDataFakturpenjualanById,
    addDataFakturpenjualan,
    editDataFakturpenjualan,
    deleteDataFakturpenjualan
}