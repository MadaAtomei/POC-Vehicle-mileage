import React, { useState } from 'react';
import './App.css';
import Logo from './Logo';

function App() {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    postMileageData(inputValue);
    // Display the input value when the form is submitted
    // alert(`You entered: ${inputValue}`);
    setShowModal(true);
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
    <div className="app">
      <Logo />
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="input-element">
          Enter mileage:
        </label>
        <input
            id="input-element"
            className="form-control"
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
          />
        <div>
          <button className="app-button" type="submit">Submit</button>
        </div>
      </form>
      {/* <button onClick={getMileageData}>Get</button> */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <div className="modal-text">
              Mileage saved successfully!
            </div>
            <button className="app-button" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;