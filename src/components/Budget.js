import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // const { budget, updateBudget } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleKeyDown = (event) =>{
        // Allow only number keys, backspace, and other navigation keys
        if (!/^[0-9\b]+$/.test(event.key) && !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Backspace", "Tab"].includes(event.key)) {
            event.preventDefault();
        }
        // handleBudgetChange(event);
    }

    const maxBudget = 20000; // place in AppContext?
    const handleBudgetChange = (event) => {

        const value = event.target.value;
        // Add your validation logic here
        // For example, check if the value is a number and is not negative
        // if (!isNaN(value) && value >= 0) {

        // alert('why cannot handle change?'+value); // debug

        if (value <= maxBudget) {
            setNewBudget(value);
        }
        else
            alert("The value cannot exceed maximum budget of £"+maxBudget);

        //setNewBudget(event.target.value);
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{newBudget}</span>
{/* <input type="number" step="10" value={newBudget} onKeyDown={handleKeyDown} ></input> */}
<input type="number" step="10" value={newBudget} onKeyDown={handleKeyDown} onChange={handleBudgetChange} ></input>
</div>
    );
};
export default Budget;