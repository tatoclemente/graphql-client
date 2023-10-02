import React from 'react'

const Notify = ({ message }) => {
  if (!message) return null
  return (
      <div style={{ backgroundColor: '#f5f2dc', borderRadius: '15px', padding: '1rem',color: 'red', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>{message}</div>
    )
}

export default Notify