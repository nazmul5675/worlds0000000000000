import React, { use, useState } from 'react';
import './Countries.css'
import Country from '../../Country/Country';

const Countries = ({ countriesPromise }) => {
    const [visitedFlag, setVisitedFlag] = useState([])
    const [visitedCountry, setVisitedCountry] = useState([]);
    const handleVisitedCountries = (country) => {
        // console.log(country);
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry)
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div>
            <h1> total number of Countries : {countries.length}</h1>
            <h3>Total Visited Country : {visitedCountry.length}</h3>
            <h3>total flag visited : {visitedFlag.length}
            </h3>
            <ol>
                {
                    visitedCountry.map(country => <li key={country.cca3.cca3} >{country.name.common} </li>)
                }
            </ol>
            <div className='visitedFlag'>
                {
                    visitedFlag.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div id='countries'>
                {
                    countries.map(country => <Country key={country.
                        cca3.
                        cca3} country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                    ></Country>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;