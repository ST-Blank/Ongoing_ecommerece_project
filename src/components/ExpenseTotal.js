import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpenseTotal = (props) => {
    return (
        <div className="mt-4">
            <h3 className="text-right">Your total expenses are Rs. {
                numeral(props.expenses
                    .map((expense) => expense.amount)
                    .reduce((accumulator, currentValue) => accumulator + currentValue, 0))
                    .format('0,0.00')
            } </h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseTotal);