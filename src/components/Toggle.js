import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick(){
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  return (
  <button style={{ background: color }} onClick={handleClick}>{isOn ? 'ON' : 'OFF'}</button>)
  ;
}

// function Toggle() {
//   const OFF = 'OFF';
//   const [toggle, setToggle] = useState(OFF);
//   function isToggle (){

//     setToggle(toggle === OFF ? 'ON' : OFF);
//   }

//   return <button onClick={isToggle}>{toggle}</button>
// }

export default Toggle;
