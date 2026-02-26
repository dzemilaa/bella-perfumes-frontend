import React from 'react';

const Navbar = ({ onLogout }) => {

  return (
    <div className="flex justify-between items-center px-4 sm:px-6 py-3 bg-white shadow-md border-b border-gray-200">
      <div className="flex items-center gap-2">
        <img src="/logop.png" alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
        <span className="text-lg sm:text-xl font-bold text-pink-700">Bella Admin</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-bold text-sm uppercase">
          A
        </div>
      <button onClick={onLogout} className="text-sm text-gray-500 hover:text-red-500 transition px-2 py-1 rounded-lg hover:bg-red-50">
          <span className="hidden sm:inline">Logout</span>
          <svg className="sm:hidden w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;