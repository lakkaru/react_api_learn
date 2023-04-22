import React, { useState, useEffect } from "react";

export default function HomeFunctional() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {setUsers(data); setIsLoading(false);})
      .catch(() => {setUsers([]); setIsLoading(false);});
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <h2>Loading...</h2>
      ) : (users.length > 0 ? (
        users.map((val, key) => {
          return <div key={key}>{val.email}</div>;
        })
      ) : (
        <h2>No users found.</h2>
      ))}
    </div>
  );
}
