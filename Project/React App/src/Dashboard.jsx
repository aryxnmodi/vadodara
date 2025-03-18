import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded">
            <a href="#">🏠 Home</a>
          </li>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded">
            <a href="#">📊 Analytics</a>
          </li>
          <li className="mb-4 hover:bg-blue-700 p-2 rounded">
            <a href="#">⚙️ Settings</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Navbar */}
        <div className="flex justify-between items-center bg-white p-4 shadow rounded-lg mb-6">
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Logout
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
            <p className="text-2xl font-bold mt-2">1,250</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
            <p className="text-2xl font-bold mt-2">$52,000</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">New Orders</h2>
            <p className="text-2xl font-bold mt-2">320</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
