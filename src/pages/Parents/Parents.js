/** @format */

import React, { useState } from "react";
import Child from "../Child/Child";

function Parents() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [color, setColor] = useState("red");

  console.log(isSwitchOn);
  function toggleSwitch() {
    // if (isSwitchOn) {
    //   setIsSwitchOn(false);
    // } else {
    //   setIsSwitchOn(true);
    // }
    // isSwitchOn ? setIsSwitchOn(false) : setIsSwitchOn(true);
    setIsSwitchOn(!isSwitchOn);
  }

  function colorChanged() {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }
  return (
    <div>
      <h1 style={{ color: color }}>parent</h1>
      <h1>스위치{color === "red" ? "red" : "blue"}</h1>
      <button onClick={toggleSwitch}>클릭!</button>
      <button onClick={colorChanged}>color changed</button>
      <Child toggleSwitch={toggleSwitch} />
    </div>
  );
}

export default Parents;
