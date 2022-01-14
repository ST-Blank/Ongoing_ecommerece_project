import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseTotal from './ExpenseTotal';
import NextMonthPrediction from './NextMonthPrediction';

const ExpenseDashboardPage = () => {
    const [sortedDateAscending, setSortedDateAscending] = useState(true);
    const sortDateA = () => setSortedDateAscending(true);
    const sortDateD = () => setSortedDateAscending(false);
    const sortDateR = () => setSortedDateAscending('');
    const [sortedAmountAscending, setSortedAmountAscending] = useState('');
    const sortAmountA = () => setSortedAmountAscending(true);
    const sortAmountD = () => setSortedAmountAscending(false);
    const sortAmountR = () => setSortedAmountAscending('');

    return (
        <div className="container-block mt-3">
            <ExpenseListFilters />
            <ExpenseList
                sortedDateAscending={sortedDateAscending}
                setSortedDateAscending={sortDateA}
                setSortedDateDescending={sortDateD}
                setSortedDateReset={sortDateR}
                sortedAmountAscending={sortedAmountAscending}
                setSortedAmountAscending={sortAmountA}
                setSortedAmountDescending={sortAmountD}
                setSortedAmountReset={sortAmountR} />
            <ExpenseTotal />
            <NextMonthPrediction />
        </div>
    )
};

export default ExpenseDashboardPage;