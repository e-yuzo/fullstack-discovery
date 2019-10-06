import React from 'react'

const Countries = ({ countries }) => {
    if (countries.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    } else if (countries.length === 1) {
        return null
    } else {
        return (
            countries.map(country => <li key={country.name}>{country.name}</li>)
        )
    }
}

export default Countries