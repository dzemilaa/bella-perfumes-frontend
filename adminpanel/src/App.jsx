import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import Users from './pages/Users';
import Reviews from './pages/Reviews';
import Login from './pages/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("admin"));

  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

return (
  <div className="h-screen overflow-hidden bg-gray-50">
    <Navbar onLogout={handleLogout} />
    <div className="flex" style={{ height: 'calc(100vh - 56px)' }}>
      <Sidebar />
      <main className="flex-1 overflow-y-auto pb-20 sm:pb-0">
        <Routes>
          <Route path="/" element={<Navigate to="/add" />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
    </div>
  </div>
);
};
export default App;