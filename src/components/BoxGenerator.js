import React, { useEffect, useState } from "react";

const BoxGenerator = (props) => {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState("");
  //   const [colors, setColors] = useState("");
  // can put things in the array to tell useEffect to run when something changes
  //   useEffect(() => {
  //     console.log("use effect");
  //     setTimeout(() => {
  //       setBox({
  //         boxes: [],
  //       });
  //     }, 1000);
  //   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(boxes);
    const newBox = color;
    // ...
    setBoxes([...boxes, newBox]);
    // what should we do with the message?
  };

  return (
    <div>
      <form id="levi" onSubmit={handleSubmit}>
        <label>Color: </label>
        <input type="text" onChange={(e) => setColor(e.target.value)} />
        <button>Add</button>
      </form>
      <div>
        {boxes.map((color, i) => (
          <p
            style={{ height: 100, width: 100, backgroundColor: color }}
            key={i}
          ></p>
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
