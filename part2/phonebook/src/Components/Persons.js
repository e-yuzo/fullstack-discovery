import React from 'react'

const Person = ( {person, removePerson} ) => {
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

const Persons = ( {persons, removePerson} ) => {
    return (
        persons.map(person => <Person key={person.id} person={person} removePerson={() => removePerson(person.id)}/>)
    )
}

export default Persons