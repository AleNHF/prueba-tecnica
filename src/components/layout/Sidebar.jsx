// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Importa el icono de menú

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(isOpen)
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-gray-800 text-white h-screen w-1/4 p-4 transition-all`}>
      <ul>
        <li className="mb-4">
          <Link to="/solicitud" className="block px-4 py-2 rounded-md hover:bg-gray-700">
            Solicitud de Tarjetas
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/tarjetas-solicitadas" className="block px-4 py-2 rounded-md hover:bg-gray-700">
            Tarjetas solicitadas
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/tarjetas-aprobadas" className="block px-4 py-2 rounded-md hover:bg-gray-700">
            Tarjetas aprobadas
          </Link>
        </li>
      </ul>
      <div className="fixed top-4 right-4 cursor-pointer block lg:hidden">
        <FaBars className="text-2xl" onClick={toggleSidebar} />
      </div>
    </div>
  );
};

export default Sidebar;
