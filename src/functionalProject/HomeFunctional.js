import React, { useState, useEffect } from "react";

export default function HomeFunctional() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [bgColor, setBgColor] = useState("teal");
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setBgColor(getRandomColor());
  },[count])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
        setBgColor('teal');
      })
      .catch(() => {
        setUsers([]);
        setIsLoading(false);
      });
  }, []);

  function handleInfo(user) {
    // console.log(user);
    setUser(user);
    setBgColor(getRandomColor());
  }

  // function to generate a random color
function getRandomColor() {
    // generate random values for red, green, and blue color components
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    // return the color as an RGB value
    return `rgb(${red}, ${green}, ${blue})`;
  }
  
  return (
    <div>
      {isLoading === true ? (
        <h2>Loading...</h2>
      ) : users.length > 0 ? (
        <div>
          {users.map((val, key) => {
            return (
              <div key={key}>
                {val.email}
                <button onClick={() => handleInfo(val)}>More Info</button>
              </div>
            );
          })}
          {user.name?(<div style={{ backgroundColor: bgColor }}>
            <div>Name : {user.name}</div>
            <div>City : {user.address?.city}</div>
          </div>):(<div  style={{ backgroundColor: bgColor }}>More Information</div>)}
          <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count +1)}>Count Up</button>
          </div>
        </div>
      ) : (
        <h2>No users found.</h2>
      )}
    </div>
  );
}
