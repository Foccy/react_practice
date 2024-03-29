import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle]= useState('');
    const [enteredAmount, setenteredAmount]= useState('');
    const [enteredDate, setenteredDate]= useState('');

    /* const [userInput, setUserInput]=useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : ''
    }) */

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        /* setUserInput({
            ...userInput,
            enteredTitle : event.target.value,
        }) */
    }
        /* setUserInput((prevState)=>{
            return{...prevState, enteredTitle}
        }) */
    
    const amountChangeHanlder = (event) => {
        setenteredAmount(event.target.value)
        /* setUserInput({
            ...userInput,
            enteredAmount : event.target.value,
        }) */
    }

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value)
        /* setUserInput({
            ...userInput,
            enteredDate : event.target.value,
        }) */
    }

    const submitHandler = (event) =>{
        event.preventDefault()
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="9=0.01" step="0.01" onChange={amountChangeHanlder}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"  onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm