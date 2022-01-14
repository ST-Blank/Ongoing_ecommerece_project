import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

const NextMonthPrediction = (props) => {
    return (
        <div className="mt-4">
            <h3 className="text-right">Your total expenses predicted for the next month Rs. {
                props.expenses.length === 1 ?
                    numeral(props.expenses
                        .map((expense) => expense.amount)
                        .reduce((accumulator, currentValue) => accumulator + currentValue, 0))
                        .format('0,0.00') :
                    ((props.expenses.map((expense) => expense.createdAt)
                        .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / props.expenses.length) <= (props.expenses.length ? props.expenses[0].createdAt + 86400000 : 86400000) ?
                        numeral(props.expenses
                            .map((expense) => expense.amount)
                            .reduce((accumulator, currentValue) => accumulator + currentValue, 0))
                            .format('0,0.00') :
                        numeral(props.expenses
                            .map((expense) => expense.amount)
                            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
                            /
                            ((props.expenses.map((expense) => expense.createdAt)
                                .reduce((accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue, Number.NEGATIVE_INFINITY)
                                -
                                props.expenses.map((expense) => expense.createdAt)
                                    .reduce((accumulator, currentValue) => accumulator < currentValue ? accumulator : currentValue, Number.POSITIVE_INFINITTY)) / 1000 / 60 / 60 / 24 / 30))
                            .format('0,0.00'))
            } </h3>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps)(NextMonthPrediction);