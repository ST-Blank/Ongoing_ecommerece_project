import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpense = (props) => {
    return (
        <div className="container-block mt-4">
            <h1 className="form-header">Edit Expense</h1>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(startEditExpense(props.expense.id, expense));
                    props.history.push('/dashboard');
                }}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    };
};

export default connect(mapStateToProps)(EditExpense);