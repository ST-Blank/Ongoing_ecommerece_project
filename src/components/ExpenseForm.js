import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseForm = (props) => {
    const [description, setDescription] = useState(props.expense ? props.expense.description : '');
    const [note, setNote] = useState(props.expense ? props.expense.note : '');
    const [amount, setAmount] = useState(props.expense ? (props.expense.amount).toString() : '');
    const [category, setCategory] = useState(props.expense ? props.expense.category : '');
    const [createdAt, setDate] = useState(props.expense ? moment(props.expense.createdAt) : moment());
    const [focused, setFocus] = useState(false);
    const [error, setError] = useState('');

    const descriptionChange = (e) => setDescription(e.target.value);
    const noteChange = (e) => setNote(e.target.value);
    const amountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setAmount(amount);
        }
    };
    const categoryChange = (e) => setCategory(e.target.value);
    const onDateChange = (createdAt) => {
        if (createdAt) {
            setDate(createdAt);
        }
    };
    const onFocusChange = ({ focused }) => {
        setFocus(focused);
    };
    const submit = (e) => {
        e.preventDefault();
        if (!description || !amount || !category) {
            setError('Please provide expense name, amount and category');
        } else {
            setError('');
            props.onSubmit({
                description: description,
                amount: parseFloat(amount),
                category: category,
                createdAt: createdAt.valueOf(),
                note: note
            });
        }
    };
    return (
        <div className="form-body">
            {error && <p className="form-error">{error}</p>}
            <form onSubmit={submit}>
                <div className="form-group row">
                    <label className="col-form-label">Expense: </label>
                    <div className="col-md-5">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Expense"
                            autoFocus
                            value={description}
                            onChange={descriptionChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label">Amount: </label>
                    <div className="col-md-5">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Amount"
                            value={amount}
                            onChange={amountChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label">Category: </label>
                    <div className="col-md-5">
                        <select
                            value={category}
                            onChange={categoryChange}
                            className="form-control"
                        >
                            <option>Select a category</option>
                            <option value="food">Food</option>
                            <option value="health">Health</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="transport">Transport</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label">Date: </label>
                    <div className="col-md-5">
                        <SingleDatePicker
                            date={createdAt}
                            onDateChange={onDateChange}
                            focused={focused}
                            onFocusChange={onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            displayFormat="Do MMMM, YYYY"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label">Note: </label>
                    <div className="col-md-5">
                        <textarea
                            className="form-control"
                            value={note}
                            onChange={noteChange}
                            placeholder="Add a note"
                            rows="3"
                        >
                        </textarea>
                    </div>
                </div>
                <button className="btn btn-success form-button">Save</button>
            </form>
        </div>
    );
}

export default ExpenseForm;