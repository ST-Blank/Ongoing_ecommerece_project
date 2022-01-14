import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, setStartDate, setEndDate, categoryAll, categoryFood, categoryEntertainment, categoryHealth, categoryTransport, categoryOthers } from '../actions/filters';
import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../styles/components/filters.css";

const ExpenseListFilters = (props) => {
    const [focused, setFocus] = useState(null);

    const changedDates = ({ startDate, endDate }) => {
        props.dispatch(setStartDate(startDate));
        props.dispatch(setEndDate(endDate));
    }
    const changedFocus = (focused) => {
        setFocus(focused);
    }

    return (
        <div className="mt-3">
            <div className="row">
                <Dropdown className="dropdown-sort">
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {props.filters.categorizedBy.charAt(0).toUpperCase() + props.filters.categorizedBy.slice(1)}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => props.dispatch(categoryAll())}>All Category</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.dispatch(categoryFood())}>Food</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.dispatch(categoryHealth())}>Health</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.dispatch(categoryEntertainment())}>Entertainment</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.dispatch(categoryTransport())}>Transport</Dropdown.Item>
                        <Dropdown.Item onClick={() => props.dispatch(categoryOthers())}>Others</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <input
                    placeholder="Search Expense"
                    className="form-control search-bar"
                    type="text"
                    value={props.filters.text}
                    onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value));
                    }} />
                <DateRangePicker
                    startDateId="1"
                    startDate={props.filters.startDate}
                    endDate={props.filters.endDate}
                    endDateId="2"
                    onDatesChange={changedDates}
                    focusedInput={focused}
                    onFocusChange={changedFocus}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    displayFormat="Do MMMM, YYYY"
                />
                <div className="add">
                    <Link to="/create">
                        <button type="button" className="btn btn-success add-expense">Add</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);