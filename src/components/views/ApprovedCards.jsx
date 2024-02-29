import React, { useState } from "react";

const ApprovedCards = () => {
  const [approvedCards, setApprovedCards] = useState([
    { id: 1, cliente: "John Doe", celular: "555-1234", monto: 1000 },
    { id: 2, cliente: "Jane Smith", celular: "555-5678", monto: 1500 },
    // Puedes agregar más tarjetas aprobadas según sea necesario
  ]);

  const handleEditMonto = (id, newMonto) => {
    setApprovedCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, monto: newMonto } : card
      )
    );
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Tarjetas Aprobadas</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Cliente</th>
            <th className="border px-4 py-2">Celular</th>
            <th className="border px-4 py-2">Monto tarjeta Aprobado</th>
          </tr>
        </thead>
        <tbody>
          {approvedCards.map((card) => (
            <tr key={card.id}>
              <td className="border px-4 py-2">{card.cliente}</td>
              <td className="border px-4 py-2">{card.celular}</td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  value={card.monto}
                  onChange={(e) =>
                    handleEditMonto(card.id, parseInt(e.target.value, 10))
                  }
                  className="w-full p-2 border rounded-md"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedCards;
