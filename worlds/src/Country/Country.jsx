import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        // if (visited) {
        //     setVisited(false)
        // }
        // else {
        //     setVisited(true)
        // }
        // setVisited(visited ? false : true)
        setVisited(!visited)
        handleVisitedCountries(country)
    }


    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <div className="country" >
                <h1>name : {country.name.common}</h1>
                <h3>Population : {country.
                    population.
                    population

                }</h3>
                <h3>Area : {country.area.area} {country.area.area > 300000 ? 'Big Country' : 'Small Country'}</h3>
                <h3>Capital : {country.capital.capital}</h3>
                <img src={country.flags.flags?.png} alt={country.flags.flags.alt} />
                <button onClick={handleVisited} className='btn'>
                    {visited ? 'visited' : 'Not visited'}
                </button>
                <button onClick={() => handleVisitedFlag(country.flags.flags?.png)} className='btn'> add visited country flag</button>
            </div>
        </div>
    );
};

export default Country;