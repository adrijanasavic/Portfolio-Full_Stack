import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  const client = axios.create({
    baseURL: "https://portfolio-backend-as.vercel.app/users",
  });

  useEffect(() => {
    client.get().then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="home-container">
      {users.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.username}</p>
            <p>{item.password}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
