// MaintenanceForm.jsx
import React, { useState } from "react";

export default function MaintenanceForm() {
  const [form, setForm] = useState({
    device_id: "",
    tech_id: "",
    date: "",
    action: "",
    result: ""
  });

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/maintenance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    if (res.ok) alert("Mantenimiento registrado");
  };

  return (
    <form onSubmit={submit} className="p-4 space-y-2">
      <input
        name="device_id"
        placeholder="ID Dispositivo"
        value={form.device_id}
        onChange={handle}
      />
      <input
        name="tech_id"
        placeholder="ID Técnico"
        value={form.tech_id}
        onChange={handle}
      />
      <input
        name="date"
        type="datetime-local"
        value={form.date}
        onChange={handle}
      />
      <input
        name="action"
        placeholder="Acción realizada"
        value={form.action}
        onChange={handle}
      />
      <textarea
        name="result"
        placeholder="Resultado"
        value={form.result}
        onChange={handle}
      />
      <button type="submit">Registrar</button>
    </form>
  );
}
