const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
//const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    /*
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'tu_usuario',
    password: process.env.DB_PASSWORD || 'tu_contraseña',
    database: process.env.DB_NAME || 'tu_base_de_datos',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
    */
    host: 'localhost',
    user: 'organiz9_lopr',
    password: 'Travian5824693170',
    database: 'organiz9_tos',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get('/api/datos', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tu_tabla');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});