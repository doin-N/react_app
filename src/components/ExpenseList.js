import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem'
//import './ExpenseList.css';

export default class ExpenseList extends Component {

  
  render() {
    
    return (
      <> 
        <ul className='list'>
        {this.props.initialExpenses.map(expense => {
          return(
            <ExpenseItem key={expense.id} expense = {expense}
             handleDelete={this.props.handleDelete} />
          )
       })}
      
        </ul>
        <button className='btn'>
            목록지우기
        </button>
      </>
    )
  }
}

/*
감싸줄 필요없은 div가 있을때 <React.Fragment> 로 감싸줄수있다.
더간략하게 <> </>이걸로 해도됨
*/ 