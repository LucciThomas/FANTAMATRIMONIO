
import React, { useState, useEffect } from 'react';

const GUESTS = ["ETHAN", "MAURO", "ROSI", "ALESSANDRA", "STEFANO", "MARCO", "LISA", "FABIO", "CHIARA", "ELENA"];
const TEAM_SIZE = 5;

export default function FantamatrimonioApp() {
  const [team, setTeam] = useState(Array(TEAM_SIZE).fill(""));
  const [countdown, setCountdown] = useState("");
  const weddingDate = new Date("2025-05-23T16:30:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const distance = Math.max(0, weddingDate - new Date());
      const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');
      setCountdown(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index, value) => {
    const updated = [...team];
    updated[index] = value;
    setTeam(updated);
  };

  const handleSubmit = () => {
    alert("Squadra registrata: " + team.join(", "));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
      <h1>Fantamatrimonio 💍</h1>
      <h2>Ilaria & Thomas</h2>
      <p>Countdown alla cerimonia: <strong>{countdown}</strong></p>
      <h3>Crea la tua squadra</h3>
      {team.map((member, idx) => (
        <select key={idx} value={member} onChange={(e) => handleChange(idx, e.target.value)} style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}>
          <option value="">Seleziona componente {idx + 1}</option>
          {GUESTS.map((g, i) => (
            <option key={i} value={g}>{g}</option>
          ))}
        </select>
      ))}
      <br />
      <button onClick={handleSubmit} style={{ padding: '1rem 2rem', fontSize: '1rem', background: '#ec4899', color: 'white', border: 'none', borderRadius: '8px' }}>
        Registra squadra
      </button>
    </div>
  );
}
