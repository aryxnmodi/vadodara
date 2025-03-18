import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    const userData = [
      { id: 1, name: "Aryan Modi", email: "aryan@example.com" },
      { id: 2, name: "Chetan Modi", email: "chetan@example.com" },
      { id: 3, name: "Meghna Modi", email: "meghna@example.com" }
    ];

    setUsers(userData);
  }, []); 

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
