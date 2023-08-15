import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, setBudget, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const remainingBudget = budget - totalExpenses;
    const upperLimit = 20000; // Set the upper limit to £20,000

    const [inputBudget, setInputBudget] = useState(budget);
    const [errorMessage, setErrorMessage] = useState('');

    const handleBudgetChange = (event) => {
        const newBudget = parseFloat(event.target.value);
        
        if (!isNaN(newBudget) && newBudget <= upperLimit) {
            setInputBudget(newBudget);
            setErrorMessage('');

            if (newBudget >= remainingBudget) {
                const shouldUpdate = window.confirm(
                    `The budget you entered exceeds the remaining budget. Do you want to proceed?`
                );
    
                if (shouldUpdate) {
                    setBudget(newBudget); // Update the actual budget value
                } else {
                    setInputBudget(budget);
                }
            }
        } else {
            setInputBudget(newBudget);
            setErrorMessage('Budget cannot exceed remaining budget or £20,000.');
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                type='number'
                value={inputBudget}
                onChange={handleBudgetChange}
                step='10'
                min='0'
                max={upperLimit} // Set the max attribute to the upper limit
                className={`budget-input ${errorMessage && 'error'}`}
            />
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </div>
    );
};

export default Budget;
