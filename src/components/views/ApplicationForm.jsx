import React, { useState } from "react";

const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [civilId, setCivilId] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !civilId || !email || !phone) {
      setError('Todos los campos son obligatorios');
      return;
    }

    setError('');
    setName('');
    setEmail('');
    setCivilId('');
    setPhone('');
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Solicitud de Tarjeta de Crédito</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded-md" />
        </label>
        <label className="block mb-2">
          Documento de Identidad:
          <input type="text" value={civilId} onChange={(e) => setCivilId(e.target.value)} className="w-full p-2 border rounded-md" />
        </label>
        <label className="block mb-2">
          Correo Electrónico:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-md" />
        </label>
        <label className="block mb-2">
          Teléfono:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded-md" />
        </label>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Registrar</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
