import React, { useState } from 'react'
import { useCreatePerson } from '../persons/custom-hooks'


const PersonForm = ({ notifyError }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')

  const createPerson = useCreatePerson(notifyError)

  const handleSubmit = e => {
    e.preventDefault()

    createPerson({ variables: { name, street, city, phone } })

    setName('')
    setPhone('')
    setStreet('')
    setCity('')
  
  }
  return (
    <div>
      <h2>personForm</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={name} onChange={({ target }) => setName(target.value)} />
        </div>
        <div>
          phone: <input value={phone} onChange={({ target }) => setPhone(target.value)} />
        </div>
        <div>
          street: <input value={street} onChange={({ target }) => setStreet(target.value)} />
        </div>
        <div>
          city: <input value={city} onChange={({ target }) => setCity(target.value)} />
        </div>
        <button>Add Person</button>
      </form>
    </div>
  )
}

export default PersonForm