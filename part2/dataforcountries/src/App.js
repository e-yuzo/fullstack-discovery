import React, { useState, useEffect } from 'react'
import Countries from './Components/Countries.js'
import Filter from './Components/Filter'
import axios from 'axios'
import CountryInfo from './Components/CountryInfo'

const App = () => {
    const [countries, setCountries] = useState([])
    // const [newName, setNewName] = useState('')
    // const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
             .then(response => {
                 setCountries(response.data)
             })
    }, [])

    const countriesToShow = (newFilter === '')
        ? countries
        : countries.filter(country => {
            const name = country.name.toLowerCase()
            const filter = newFilter.toLowerCase()
            return name.includes(filter)
        })

    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }

    return (
        <div>
            <Filter inputValue={newFilter} inputOnChange={handleFilterChange} />
            <Countries countries={countriesToShow} />
            <CountryInfo countries={countriesToShow} />
        </div>
    )
}

export default App