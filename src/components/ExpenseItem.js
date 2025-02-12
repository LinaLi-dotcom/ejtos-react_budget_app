import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaCirclePlus } from 'react-icons/fa6';
import { FaCircleMinus } from 'react-icons/fa6';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    //const [newCurrency, setNewCurrency] = useState(currency);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE', 
            payload: props.id,
        });
    };

    const handleChangeCurrency = (newCurrency) => {
        dispatch({
            type: 'CHANGE_CURRENCY', 
            payload: newCurrency,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type:"RED_EXPENSE",
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FaCirclePlus color='green'size='1.5em' onClick={event => increaseAllocation(props.name)}></FaCirclePlus></td>
            <td><FaCircleMinus color='red'size='1.5em' onClick={event=> decreaseAllocation(props.name)}></FaCircleMinus></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
