
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NeighboringCountries() {
  const [neighboringData, setNeighboringData] = useState([]); 

  useEffect(() => {
    // Fetch data when component mounts
    axios.get('https://disease.sh/v3/covid-19/countries')
      .then(response => {
        
        const neighboringCountries = response.data.filter(country =>
          ['India', 'Sri Lanka', 'Bangladesh', 'China', 'Nepal'].includes(country.country)
        );
        setNeighboringData(neighboringCountries);
      })
      .catch(error => {
        console.error('Error fetching neighboring countries data: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Neighboring Countries</h1>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recoveries</th>
            <th>Vaccinations</th>
          </tr>
        </thead>
        <tbody>
          
          {neighboringData.map(country => (
            <tr key={country.country}>
              <td>{country.country}</td>
              <td>{country.cases}</td>
              <td>{country.deaths}</td>
              <td>{country.recovered}</td>
              <td>{country.tests}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NeighboringCountries;
