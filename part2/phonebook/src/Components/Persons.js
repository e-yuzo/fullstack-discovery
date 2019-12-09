import React from 'react'

const Person = ( {person} ) => {
    return (
        <div>
            <li>{person.name} {person.number} <Button key={person.id} remove={removePerson}> </Button></li> 
        </div>
    )
}

const Button = ( {remove} ) => {
    return (
        <button onClick={remove}>delete</button>
    )
}

const Persons = ( {persons} ) => {
    return (
        persons.map(person => <Person key={person.name} person={person} />)
    )
}

export default Persons