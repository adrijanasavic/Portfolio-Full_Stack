import React, { useState, useEffect } from "react";

export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((item) => setData(item))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <>
      <h1>About</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
}