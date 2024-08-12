import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import FetchRandomQuestions from './components/FetchRandomQuestions';
import Home from './components/Home'; // Import the Home component
import Layout from './components/Layout'; // Import the Layout component
import './index.css';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/questions" element={<FetchRandomQuestions />} />
        <Route path="*" element={<div>Page Not Found</div>} /> {/* Optional 404 page */}
      </Routes>
    </Layout>
  </Router>
);

export default App;
