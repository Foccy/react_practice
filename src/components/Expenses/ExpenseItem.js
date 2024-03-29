import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card  from "../UI/Card.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {

    const[title , setTitle] = useState(props.title);

    const clickHandler = ()=>{
        setTitle('Updated!')
        console.log('Clicked!!!')
    }
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">  
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* document.getElementById('root').addEventListener() */}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem