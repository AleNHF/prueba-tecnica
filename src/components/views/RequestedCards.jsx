import React, { useState } from "react";

const RequestedCards = () => {
    const [contacts, setContacts] = useState([
        { id: 1, name: "Juan Carlos", phone: "555-1234" },
        { id: 2, name: "Jane Smith", phone: "555-5678" },
    ]);

    const [message, setMessage] = useState(null);

    const handleApproval = (contactId) => {
        setContacts((prevContacts) =>
            prevContacts.map((contact) =>
                contact.id === contactId ? { ...contact, approved: true } : contact
            )
        );
        setMessage("Tarjeta aprobada exitosamente");

        setTimeout(() => {
            setMessage(null);
        }, 3000);
    };

    const handleRejection = (contactId) => {
        setContacts((prevContacts) =>
            prevContacts.map((contact) =>
                contact.id === contactId ? { ...contact, rejected: true } : contact
            )
        );
        setMessage("Tarjeta rechazada");

        setTimeout(() => {
            setMessage(null);
        }, 3000);
    };

    return (
        <div className="bg-white p-4 rounded-md shadow-md max-w-xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Lista de Contactos</h2>
            {message && <div className="mb-4">{message}</div>}
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
                                {!contact.approved && !contact.rejected && (
                                    <>
                                        <button
                                            className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                                            onClick={() => handleApproval(contact.id)}
                                        >
                                            Aprobar
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded-md"
                                            onClick={() => handleRejection(contact.id)}
                                        >
                                            Rechazar
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RequestedCards;
