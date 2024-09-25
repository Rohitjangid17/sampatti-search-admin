import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login to SampattiSearch</h2 >

        <form id="loginForm" className="space-y-4" >
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Select Your Role</label>
            <select id="role" name="role" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" >
              <option value="" disabled selected>Select your role</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              <option value="agent">Agent</option>
              <option value="admin">Admin</option>
              <option value="investor">Investor</option>
            </select >
            <p className="error-message hidden" > Please select a role.</p >
          </div >

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            <p className="error-message hidden" > Invalid email address.</p >
          </div >

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative" >
              <input type="password" id="password" name="password" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
            </div >
            <p className="error-message hidden" > Password is required.</p >
          </div >

          <div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
          </div >

          {/* <div className="text-sm text-center" >
            <a className="text-blue-600 hover:underline"> Forgot Password ?</a >
          </div >
          <div className="text-sm text-center" >
            <p>Don’t have an account? <a className="text-blue-600 hover:underline">Sign Up</a></p >
          </div > */}
        </form >
      </div >
    </>
  );
}

export default App;
