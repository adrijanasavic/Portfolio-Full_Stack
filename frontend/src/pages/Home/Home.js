import React, { useEffect, useState } from "react";
import About from "../../components/About/About";
function Home() {
  const [text, setText] = useState("Hello");

  useEffect(() => {
    setTimeout(() => {
      setText("I'm Adrijana");
    }, 3000);
  });

  return (
    <>
      <h1>{text}</h1>
      <About />
    </>
  );
}

export default Home;
