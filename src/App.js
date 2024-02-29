import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicationForm from './components/views/ApplicationForm';
import AppHolder from './components/layout/AppHolder';
import RequestedCards from './components/views/RequestedCards';
import ApprovedCards from './components/views/ApprovedCards';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppHolder />}>
          <Route path="/solicitud" element={<ApplicationForm />} />
          <Route path="/tarjetas-solicitadas" element={<RequestedCards />} />
          <Route path="/tarjetas-aprobadas" element={<ApprovedCards />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;