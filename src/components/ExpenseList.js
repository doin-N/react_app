import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'
//import './ExpenseList.css';


const ExpenseList = ({ expenses, initialExpenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
     <ul className='list'>
        {initialExpenses.map(expense => {
          return(
            <ExpenseItem key={expense.id} expense = {expense}
             handleDelete={handleDelete} handleEdit = {handleEdit}
             />
          )
       })}
      
        </ul>
        {expenses.length >0 ?
         <button className='btn' onClick={clearItems}>
            목록지우기
            <MdDelete className = 'btn-icon'/>
        </button>
        :null
          
        }
      </>
  )
}

export default ExpenseList


/*
감싸줄 필요없은 div가 있을때 <React.Fragment> 로 감싸줄수있다.
더간략하게 <> </>이걸로 해도됨
*/ 