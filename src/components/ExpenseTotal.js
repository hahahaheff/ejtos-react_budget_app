import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
// import {useSelector} from 'react-redux';

const ExpenseTotal = () => {
    // const { expenses } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += item.cost);
    // }, 0);

    const { totalExpenses } = useContext(AppContext);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;