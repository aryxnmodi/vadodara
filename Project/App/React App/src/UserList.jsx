import React, { useState, useEffect, useRef } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(false); // Track initial render

  // Fetch users from API
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  // useEffect to fetch users on mount
  useEffect(() => {
    if (!isMounted.current) {
      fetchUsers();
      isMounted.current = true; // Mark as mounted
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">User List</h1>

      {/* Loading Indicator */}
      {loading && <p className="text-gray-500">Loading users...</p>}

      {/* User List */}
      <ul className="border rounded p-4">
        {users.map((user) => (
          <li key={user.id} className="py-2 border-b">{user.name} - {user.email}</li>
        ))}
      </ul>

      {/* Refresh Button */}
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={fetchUsers}
      >
        Refresh Users
      </button>
    </div>
  );
};

export default UserList;
