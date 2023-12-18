import React, { useContext } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import CurrencyDropdown from './components/CurrencyDropdown';


// Add code to import the other components here under


import { AppContext, AppProvider } from './context/AppContext';
const App = () => {

   



    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-4'>
                {
                    <div className='col-sm'>
                        <Budget  />
                        {/* <Budget budget={budget} setBudget={setBudget} /> */}
                    </div>
                }
                {
                    //Remaining component
                    <div className='col-sm'>
                        <Remaining />                
                    </div>
                }
                {
                    /* Add ExpenseTotal component here */
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                }
                {
                    <div className='col-sm'>
                        <CurrencyDropdown />
                    </div>
                }
                </div> 
                <div className='row mt-4'>
                {
                    /* Add ExpenseList component here */
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                }
                </div> 
                <div className='row mt-4'>
                        

                {
                    /* Add AllocationForm component here under */
                    <div className='col mt-3'>
                        <AllocationForm />
                    </div>
                }
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
