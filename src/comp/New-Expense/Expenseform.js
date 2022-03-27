import './Expenseform.css';
import React, {useState}  from 'react';


const Expenseform=()=>{
    const [valTitle,SetvalTitle]=useState("");
    const ChangeTitle=(event)=>{
        SetvalTitle(event.target.value);
    };
    const [valAmount,SetvalAmount]=useState("");
    const ChangeAmount=(event)=>{
        SetvalAmount(event.target.value);
    };
    const [valDate,SetvalDate]=useState("");
    const ChangeDate=(event)=>{
        SetvalDate(event.target.value);
    };
    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={ChangeTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={ChangeAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={ChangeDate}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    );
}


export default Expenseform;