import React, { useState } from 'react'
import Persons from './Components/Persons'
import PersonForm from './Components/PersonForm'
import Filter from './Components/Filter'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')

    const personsToShow = (newFilter === '')
        ? persons
        : persons.filter(person => {
            const name = person.name.toLowerCase()
            const filter = newFilter.toLowerCase()
            return name.includes(filter)
        })

    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
        }
        const array = persons.map(person => person.name)
        if (array.indexOf(personObject.name) !== -1) {
            window.alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter inputValue={newFilter} inputOnChange={handleFilterChange} />
            <h2>add a new</h2>
            <PersonForm
                onSubmit={addName}
                inputNameValue={newName}
                inputNameOnChange={handleNameChange}
                inputNumberValue={newNumber}
                inputNumberOnChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <Persons persons={personsToShow}/>
        </div>
    )
}

export default App