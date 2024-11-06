const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'stockcar'
});

const createTelefone = (data, callback) => {
    const query = 'INSERT INTO telefone (cliente_id, numero, tipo) VALUES (?, ?, ?)';
    con.query(query, [data.cliente_id, data.numero, data.tipo], callback);
};

const readTelefones = (callback) => {
    const query = 'SELECT * FROM telefone';
    con.query(query, callback);
};

const updateTelefone = (data, callback) => {
    const query = 'UPDATE telefone SET numero = ?, tipo = ?, cliente_id = ? WHERE telefone_id = ?';
    con.query(query, [data.numero, data.tipo, data.cliente_id, data.telefone_id], callback);
};

const deleteTelefone = (telefone_id, callback) => {
    const query = 'DELETE FROM telefone WHERE telefone_id = ?';
    con.query(query, [telefone_id], callback);
};

module.exports = { createTelefone, readTelefones, updateTelefone, deleteTelefone };