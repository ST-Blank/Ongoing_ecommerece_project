import moment from 'moment';

const selectExpenses = (expenses, { text, categorizedBy, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAt = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAt, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAt, 'day') : true;
        const category = categorizedBy.toLowerCase() === 'all category' ? true : expense.category === categorizedBy;

        let textMatch = expense.description;

        //Naive Pattern Searching Algorithm
        let count = 0;
        if (text.length) {
            textMatch = "";
            for (let i = 0; i < expense.description.length; i++) {
                for (let j = 0; j < text.length; j++) {
                    if (j === expense.description.length) break;
                    if (expense.description[i + j] === undefined) break;
                    if (text[j].toLowerCase() !== expense.description[i + j].toLowerCase()) break;
                    if (j === text.length - 1) count++;
                }
                if (count) {
                    textMatch = expense.description;
                    break;
                }
            }
        }

        return startDateMatch && endDateMatch && textMatch && category;
    }).sort((i, j) => {
        if (sortBy === 'dateAscending') {
            return i.createdAt < j.createdAt ? -1 : 1;
        } else if (sortBy === 'dateDescending') {
            return i.createdAt < j.createdAt ? 1 : -1;
        } else if (sortBy === 'amountDescending') {
            return i.amount < j.amount ? 1 : -1;
        } else if (sortBy === 'amountAscending') {
            return i.amount < j.amount ? -1 : 1;
        }
    });
};

export default selectExpenses;