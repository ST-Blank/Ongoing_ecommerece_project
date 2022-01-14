import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => {
    return (
        <tr>
            <th className="sn">{props.sn}</th>
            <td>{props.description}</td>
            <td>Rs. {numeral(props.amount).format('0,0.00')}</td>
            <td className="visibilityDate">{moment(props.createdAt).format('Do MMMM, YYYY')}</td>
            <td className="visibilityNote">{props.note}</td>
            <td>
                <Link to={`/edit/${props.id}`}>
                    <button className="btn btn-info mr-1">Edit</button>
                </Link>
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        props.dispatch(startRemoveExpense({ id: props.id }));
                    }}>Delete</button>
            </td>
        </tr>
    );
}

export default connect()(ExpenseListItem);