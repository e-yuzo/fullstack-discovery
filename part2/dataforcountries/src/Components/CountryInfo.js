import React from 'react'


const Languages = ({ languages }) => (
    languages.map(language => <li key={language.name}>{language.name}</li>)
)

const CountryInfo = ({ countries }) => {
    console.log(countries)
    if (countries.length === 1) {
        const country = countries[0]
        return (
            <div>
                <h2>{country.name}</h2>
                <p>
                    capital {country.capital}<br />
                    population {country.population}
                </p>
                <h3>languages</h3>
                <ul>
                    <Languages languages={country.languages}/>
                </ul>
                <img src={country.flag} alt={country.name} width="128" height="128" />
            </div>
        )
    } else {
        return null
    }
}

export default CountryInfo