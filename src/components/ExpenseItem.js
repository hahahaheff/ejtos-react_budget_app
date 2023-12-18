import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const costChange = 10;
    const increaseAllocation = (name) => {
        alert('name ' + name + ' increase');
        alert(dispatch);
        changeAllocation(name, costChange);
    }
    const decreaseAllocation = (name) => {
        alert('name ' + name + ' decrease');

        changeAllocation(name, -1 * costChange);
    }

    const changeAllocation = (name, cost) => {
        const expense = {
            name: name,
            cost: cost,
        };

        // alert("no error in changeAllocation?");
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
        alert("no error in changeAllocation?");
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;