// import React, { useState } from 'react';
import React, { useContext, useState } from 'react';

import './CurrencyDropdown.css'; // make sure your CSS styles are in this file
import { AppContext } from '../context/AppContext';

// // Create a mapping of currency names to symbols
// const currencySymbols = {
//     '$ Dollar': '$',
//     '£ Pound': '£',
//     '€ Euro': '€',
//     '₹ Rupee': '₹'
//   };

//   const currencies = {
//     Dollar: '$',
//     Pound: '£',
//     Euro: '€',
//     Rupee: '₹'
//   };

const currencyNames = {
    '$': 'Dollar',
    '£': 'Pound',
    '€': 'Euro',
    '₹': 'Rupee'
  };

const CurrencyDropdown = () => {
    // const [selectedCurrency, setSelectedCurrency] = useState('£');
    const {selectedCurrency} = useContext(AppContext)
    const {dispatch} = useContext(AppContext)
//   const [selectedCurrency, setSelectedCurrency] = useState('£ Pound');

    const selectCurrency = (symbol) => {
      // Update the selectedCurrency state with the symbol of the clicked currency
      setSelectedCurrency(symbol);
    };

    const setSelectedCurrency = (currency) => {
        dispatch({ type: 'CHG_CURRENCY', payload: currency});
    };

    const getCurrencyName = (symbol) => {
        return currencyNames[symbol];
    };
  
    const isCurrencySelected = (symbol) => {
      return currencyNames[symbol] === selectedCurrency;
    };

  return (
    <div className="currency-dropdown">
      <button
        name="currency"
        className="dropdown-button"
        onClick={(e) => {
          const dropdownContent = e.currentTarget.nextElementSibling;
          dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        }}
        onBlur={(e) => {
          setTimeout(() => { // Timeout to allow click event to register before hiding
            e.currentTarget.nextElementSibling.style.display = 'none';
          }, 100);
        }}
      >
        {getCurrencyName(selectedCurrency)} ({selectedCurrency}) ▼
      </button>
      <div className="currency-dropdown-content">
        {/* {Object.entries(currencySymbols).map(([name, symbol]) => ( */}
        {/* {Object.entries(currencies).map(([name, symbol]) => ( */}
        {Object.entries(currencyNames).map(([name, symbol]) => (
          <a
            key={name}
            onClick={() => selectCurrency(name)}
            className={isCurrencySelected(name) ? 'selected' : ''}
          >
            {symbol} {name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CurrencyDropdown;
