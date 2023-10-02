import React, { useEffect, useState } from 'react'
import { EDIT_NUMBER } from '../persons/graphql-mutations'
import { useMutation } from '@apollo/client'


const PhoneForm = ({ notifyError }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const [changeNumber, result] = useMutation(EDIT_NUMBER)

  useEffect(() => {
    if(result.error && result.error.message) {

      notifyError('Person not found')
    }
  }, [result.error])

  const handleSubmit = e => {
    e.preventDefault()

    changeNumber({ variables: { name, phone } })

    setName('')
    setPhone('')
  
  }
  return (
    <div>
      <h2>Edit Phone Number</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={name} onChange={({ target }) => setName(target.value)} />
        </div>
        <div>
          phone: <input value={phone} onChange={({ target }) => setPhone(target.value)} />
        </div>
        <button>Change Phone</button>
      </form>
    </div>
  )
}

export default PhoneForm