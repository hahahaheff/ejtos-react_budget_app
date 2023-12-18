import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    
    const { budget, setBudget } = useContext(AppContext);
    const {selectedCurrency } = useContext(AppContext);
    const handleKeyDown = (event) =>{
        // Allow only number keys, backspace, and other navigation keys
        if (!/^[0-9\b]+$/.test(event.key) 
            && !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Backspace", "Tab"].includes(event.key)) {
            event.preventDefault();
        }
    }

    const maxBudget = 20000; // place in AppContext?
    const handleBudgetChange = (event) => {

        const value = event.target.value;
        // Add your validation logic here
        // For example, check if the value is a number and is not negative
        // if (!isNaN(value) && value >= 0) {

        // alert('why cannot handle change?'+value); // debug

        if (value <= maxBudget) {
            setBudget(value);
        }
        else
            alert("The value cannot exceed maximum budget of "+{selectedCurrency}+maxBudget);

        //setNewBudget(event.target.value);
        
    }
    return (
<div className='alert alert-secondary'>
    {/* <span>Budget: £Something</span> */}
    <span>Budget: {selectedCurrency}{budget}</span>
    {/* <input type="number" step="10" value={budget} onKeyDown={handleKeyDown} ></input> */}
    {/* <input type="number" step="10" value={newBudget} onKeyDown={handleKeyDown} ></input> */}
    <br />
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{marginRight: '5px'}}>{selectedCurrency}</span>
        <input type="number" step="10" value={budget} onKeyDown={handleKeyDown} onChange={handleBudgetChange} ></input>
    </div>
</div>
    );
};
export default Budget;