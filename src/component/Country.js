import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,region,population,area,timezones,languages} = props.country;;
    const countryHandler = props.countryHandler;
    return (
        <div className="country">
            <div className="m-3 bg-light shadow-lg">
                <img src={props.country.flag} alt=""/>
                <div className="country-content">
                    <h3>{name}<span><small>({region})</small></span></h3>
                    <p><strong>Population:</strong> {population}</p>
                    <p><strong>Area:</strong> {area}</p>
                    <p><strong>Time zone:</strong>{timezones[0]}</p>
                    <p><strong>Native Language</strong> {languages[0].nativeName}</p>
                    <button onClick={() => countryHandler(props.country)} className="btn btn-outline-secondary btn-sm">Add to Country</button>
                </div>
            </div>
        </div>
    );
};

export default Country;