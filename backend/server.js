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

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await pool.query(
      'SELECT * FROM jugador WHERE id_jugador = ? AND id_pass = ?',
      [username, password]
    );

    if (rows.length > 0) {
      // Usuario autenticado
      res.json({ success: true, message: 'Login exitoso', user: rows[0] });
    } else {
      // Credenciales inválidas
      res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

app.post('/api/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Primero, verifica si el usuario ya existe
    const [existingUser] = await pool.query(
      'SELECT * FROM jugador WHERE id_jugador = ? OR correo_jugador = ?',
      [username, email]
    );

    if (existingUser.length > 0) {
      // Usuario o email ya existen
      return res.status(409).json({ success: false, message: 'El nombre de usuario o email ya están en uso' });
    }

    // Si no existe, procede con el registro
    const [result] = await pool.query(
      'INSERT INTO jugador (id_jugador, id_pass, correo_jugador) VALUES (?, ?, ?)',
      [username, password, email]
    );

    if (result.affectedRows > 0) {
      res.status(201).json({ success: true, message: 'Usuario registrado exitosamente' });
    } else {
      res.status(500).json({ success: false, message: 'No se pudo registrar el usuario' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});