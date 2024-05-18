
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Affected() {
  const [selectedCountry, setSelectedCountry] = useState(''); // State for selected country
  const [data, setData] = useState({}); // State for fetched data

  useEffect(() => {
    
    if (selectedCountry) {
      axios.get(`https://disease.sh/v3/covid-19/countries/${selectedCountry}`)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }
  }, [selectedCountry]);

  return (
    <div>
      <h1>Affected</h1>
      <select onChange={(e) => setSelectedCountry(e.target.value)}>
        
      </select>
      <div>
     
      </div>
    </div>
  );
}

export default Affected;
