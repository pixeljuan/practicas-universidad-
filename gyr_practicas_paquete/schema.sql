CREATE DATABASE gyr_practicas;
USE gyr_practicas;

CREATE TABLE devices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  serial VARCHAR(100) UNIQUE,
  model VARCHAR(100),
  type VARCHAR(50), -- lector, panel, detector
  status VARCHAR(30) DEFAULT 'stock'
);

CREATE TABLE technicians (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  phone VARCHAR(30)
);

CREATE TABLE maintenance_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  device_id INT,
  tech_id INT,
  date DATETIME,
  action VARCHAR(200),
  result TEXT,
  FOREIGN KEY (device_id) REFERENCES devices(id),
  FOREIGN KEY (tech_id) REFERENCES technicians(id)
);
