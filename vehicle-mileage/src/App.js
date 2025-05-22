import React, { useState } from 'react';

function App() {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    postMileageData(inputValue);
    // Display the input value when the form is submitted
    alert(`You entered: ${inputValue}`);
  };

  const postMileageData = async (inputValue) => {
    const response = await fetch('https://682e2e94746f8ca4a47c2c98.mockapi.io/Vehicle/capture/mileage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: '3',
        mileage: inputValue,
        date:"test",
        vehicleName:"test"
      }),
    });
  
    const data = await response.json();
    console.log('mileage:', data);
  };

  const getMileageData = async () => {
    const response = await fetch('https://682e2e94746f8ca4a47c2c98.mockapi.io/Vehicle/capture/mileage');
    const mileage = await response.json();
    console.log('Get All mileage:', mileage);
  };
  

  return (
    <div className="App">
      <h1>Simple React Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Enter some text:
            <input 
              type="text" 
              value={inputValue} 
              onChange={handleInputChange} 
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <button onClick={getMileageData}>Get</button>
    </div>
  );
}

export default App;