// index.js
import express from "express";
import mysql from "mysql2/promise";

const app = express();
app.use(express.json());

// pool conexión
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "gyr_practicas"
});

// endpoint listar devices
app.get("/api/devices", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM devices");
  res.json(rows);
});

// endpoint crear log de mantenimiento
app.post("/api/maintenance", async (req, res) => {
  const { device_id, tech_id, date, action, result } = req.body;
  try {
    const [r] = await pool.query(
      "INSERT INTO maintenance_logs (device_id, tech_id, date, action, result) VALUES (?, ?, ?, ?, ?)",
      [device_id, tech_id, date, action, result]
    );
    res.status(201).json({ ok: true, id: r.insertId });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.listen(3000, () => console.log("API running on http://localhost:3000"));
