import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_LOCATION',
            payload: val,
        });
    };

    const containerStyle = {
        backgroundColor: 'lightgreen',
        color: 'white',
    };

    return (
        <div className='alert alert-secondary' style={containerStyle}>
            Currency
            <select name='Currency' id='Currency' onChange={(event) => changeLocation(event.target.value)}>
                <option value='£'>Uk(£)</option>
                <option value='₹'>India(₹)</option>
                <option value='€'>Europe(€)</option>
                <option value='CAD'>Canada(CAD)</option>
            </select>
        </div>
    );
};

export default Currency;

