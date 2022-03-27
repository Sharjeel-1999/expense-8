import React from "react";
import './Newexpense.css';
import Expenseform from "./Expenseform";



const NewExpense=()=>{
return(
    <div className="newexpense">
    <from>
    <Expenseform/>
    </from>
    </div>
);
}



export default NewExpense;