import React, { useState, useEffect } from 'react'
import Persons from './Components/Persons'
import PersonForm from './Components/PersonForm'
import Filter from './Components/Filter'
import phoneService from './services/phonebook'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')

    useEffect(() => {
        phoneService.getAll().then(initialPersons => {
            setPersons(initialPersons)
        })
        // axios.get('http://localhost:3001/persons')
        //     .then(response => {
        //         setPersons(response.data)
        //     })
    }, [])

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

    const deletePerson = (id) => {
        phoneService.remove(id).then(status => {
            console.log(status)
        })
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
            // setPersons(persons.concat(personObject))
            phoneService.create(personObject).then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })
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
            <Persons persons={personsToShow} />
        </div>
    )
}

export default App