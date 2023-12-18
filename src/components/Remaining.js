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
    const {selectedCurrency} = useContext(AppContext)


    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {selectedCurrency}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;