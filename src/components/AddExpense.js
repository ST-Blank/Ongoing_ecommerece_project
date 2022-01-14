import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const AddExpense = (props) => (
    <div className="container-block mt-4">
        <h1 className="form-header">Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(startAddExpense(expense));
                props.history.push('/dashboard');
            }}
        />
    </div>
);

export default connect()(AddExpense);