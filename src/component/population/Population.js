import React from 'react';

const Population = (props) => {
    const population = props.addCountry;
    // let total = 0;
    // for (let i = 0; i < population.length; i++) {
    //     const country = population[i];
    //     total = total + country.population
    // }
    // const total = population.reduce((sum,country) => sum + country.population,0);
    const total = population.reduce((total, country) => total + country.population, 0);
    return (
        <div>
            <h6 className='text-center'>Total population {total}</h6>
        </div>
    );
};

export default Population;