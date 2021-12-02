/** @format */

import React from "react";

function Child(props) {
  console.log(props);
  return (
    <div>
      <h2 style={{ color: props.titleColor }}>Child Component</h2>
      <button onClick={props.toggleSwitch}>자식컴포넌트</button>
    </div>
  );
}

export default Child;
