import React from 'react'

function Button({ color, text}) {
  return <button className={color}>{text}</button>;
  
}

export default Button