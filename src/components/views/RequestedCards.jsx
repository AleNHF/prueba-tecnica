import React, { useState } from "react";

const RequestedCards = () => {
    const [contacts, setContacts] = useState([
        { id: 1, name: "Juan Carlos", phone: "555-1234" },
        { id: 2, name: "Jane Smith", phone: "555-5678" },
    ]);

    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Lista de Contactos</h2>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Cliente</th>
                        <th className="border px-4 py-2">Teléfono</th>
                        <th className="border px-4 py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                            <td className="border px-4 py-2">{contact.name}</td>
                            <td className="border px-4 py-2">{contact.phone}</td>
                            <td className="border px-4 py-2">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">Aprobar</button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded-md">Rechazar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RequestedCards;
