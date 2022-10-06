import React from 'react'

type ButtonProps = {
    label : string
}

const Button = ({label: text}: ButtonProps) => {
  return (
    <div style={{
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
    }}>{text}</div>
  )
}

export default Button