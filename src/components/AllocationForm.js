import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch,remaining  } = useContext(AppContext);
    const {selectedCurrency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');



    // const handleKeyDown = (event) =>{
    //     // Allow only number keys, backspace, and other navigation keys
    //     if (!/^[0-9\b]+$/.test(event.key) && !["ArrowLeft", "ArrowRight", "Backspace", "Tab"].includes(event.key)) {
    //         event.preventDefault();
    //     }
    // }

    const submitEvent = () => {

            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value="HR" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
                  </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{marginRight: '5px', marginLeft: '20px', width: '30px'}}>{selectedCurrency}</span>
                        {/* {selectedCurrency} */}
                        {/* <span style="margin-right: 5px;">{selectedCurrency}</span> */}
                        <input
                            
                            required='required'
                            type='number'
                            id='cost'
                            value={cost}
                            style={{ marginLeft: '2rem' , size: 10}}
                            // onKeyDown={(event) => handleKeyDown(event)}
                            onChange={(event) => setCost(event.target.value)}>
                            </input>
                        </div>
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                    
                </div>
            </div>

        </div>
    );
};

export default AllocationForm;