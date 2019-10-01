import React from 'react'

const Person = ( {person} ) => {
    return (
        <li>{person.name} {person.number}</li>
    )
}

const Persons = ( {persons} ) => {
    return (
        persons.map(person => <Person key={person.name} person={person} />)
    )
}

export default Persons