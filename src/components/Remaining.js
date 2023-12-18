import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
// const Remaining = (budget) => {
    // const { remaining } = useContext(AppContext);
    // const { expenses, budget } = useContext(AppContext);
    const { totalExpenses, budget } = useContext(AppContext);
    // const { expenses } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total = total + item.cost);
    // }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
            {/* <span>Remaining: £{remaining}</span> */}
            
        </div>
    );
};
export default Remaining;