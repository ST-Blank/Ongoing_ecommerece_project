import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { sortByDateAscending, sortByDateDescending, sortByAmountAscending, sortByAmountDescending } from '../actions/filters';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import sortIcon from '../icons/sort.svg';
import ascending from '../icons/ascending.svg';
import descending from '../icons/descending.svg';

const ExpenseList = (props) => {
    const sortDate = () => {
        if (props.sortedDateAscending) {
            props.setSortedAmountReset();
            props.setSortedDateDescending();
            props.dispatch(sortByDateDescending());
        } else {
            props.setSortedAmountReset();
            props.setSortedDateAscending();
            props.dispatch(sortByDateAscending());
        }
    }

    const sortAmount = () => {
        if (props.sortedAmountAscending) {
            props.setSortedDateReset();
            props.setSortedAmountDescending();
            props.dispatch(sortByAmountDescending());
        } else {
            props.setSortedDateReset();
            props.setSortedAmountAscending();
            props.dispatch(sortByAmountAscending());
        }
    }

    return (
        <div className="mt-4">
            <Table bordered hover>
                <thead className="thead-dark">
                    <tr>
                        <th className="table-header sn">SN</th>
                        <th className="table-header">Expense</th>
                        <th
                            className="table-header amt"
                            onClick={sortAmount}>Amount &nbsp;
                            {props.sortedAmountAscending === '' ?
                                <img
                                    src={sortIcon}
                                    height="18px"
                                    width="10px"
                                /> :
                                (props.sortedAmountAscending ?
                                    <img
                                        src={ascending}
                                        height="6px"
                                        width="10px"
                                    /> :
                                    <img
                                        src={descending}
                                        height="6px"
                                        width="10px"
                                    />
                                )}
                        </th>
                        <th
                            onClick={sortDate}
                            className="visibilityDate table-header">Date &nbsp;
                            {props.sortedDateAscending === '' ?
                                <img
                                    src={sortIcon}
                                    height="18px"
                                    width="10px"
                                /> :
                                (props.sortedDateAscending ?
                                    <img
                                        src={ascending}
                                        height="6px"
                                        width="10px"
                                    /> :
                                    <img
                                        src={descending}
                                        height="6px"
                                        width="10px"
                                    />
                                )}
                        </th>
                        <th className="table-header visibilityNote">Note</th>
                        <th className="table-header actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.expenses.map((expense, index) => (
                        <ExpenseListItem
                            sn={index + 1}
                            key={expense.id}
                            {...expense}
                        />
                    )
                    )}
                </tbody>
            </Table>

        </div>
    );
}

export default connect((state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
})(ExpenseList);
