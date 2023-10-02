import { useState } from 'react';
import './App.css'
import Persons from './components/Persons';
import PersonForm from './components/personForm';
import { usePersons } from './persons/custom-hooks';
import Notify from './components/ErrorMessage';
import PhoneForm from './components/PhoneForm';




function App() {
  const { loading, error, data } = usePersons();
  const [errorMessage, setErrorMessage] = useState(null);

  if (error) return <span>{error}</span>;

  const notifyError = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 4000)
  }

  return (
    <div>
      <Notify message={errorMessage} />
      {loading ? <p>Loading...</p> :
        (
          <>
            <h1>GraphQL + React</h1>
            <Persons persons={data.allPersons} />
          </>
        )
      }
      <PhoneForm notifyError={notifyError} />
      <PersonForm notifyError={notifyError}  />
    </div>
  )
}

export default App
