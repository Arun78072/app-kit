import React, { useState } from "react";

export default function Test() {
  const [cls, setCls] = useState("green");

  return (
    <>
      <style>{`
        .red {color: red}
        .green {color: green}
      `}
      </style>
      <button
        className='green'
        onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))}
      >
        
      </button>
      <button
        className={cls}
        onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))}
      >
        
      </button>
    </>
  );
}


