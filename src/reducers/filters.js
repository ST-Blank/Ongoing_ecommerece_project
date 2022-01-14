//Filters Reducer
import moment from 'moment';

const filtersReducerDefaultState = {
    text: "",
    categorizedBy: 'all category',
    sortBy: 'dateAscending',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'CATEGORY_ALL':
            return {
                ...state,
                categorizedBy: 'all category'
            };
        case 'CATEGORY_FOOD':
            return {
                ...state,
                categorizedBy: 'food'
            };
        case 'CATEGORY_HEALTH':
            return {
                ...state,
                categorizedBy: 'health'
            };
        case 'CATEGORY_ENTERTAINMENT':
            return {
                ...state,
                categorizedBy: 'entertainment'
            };
        case 'CATEGORY_TRANSPORT':
            return {
                ...state,
                categorizedBy: 'transport'
            };
        case 'CATEGORY_OTHERS':
            return {
                ...state,
                categorizedBy: 'others'
            };
        case 'SORT_BY_DATE_ASCENDING':
            return {
                ...state,
                sortBy: 'dateAscending'
            };
        case 'SORT_BY_DATE_DESCENDING':
            return {
                ...state,
                sortBy: 'dateDescending'
            };
        case 'SORT_BY_AMOUNT_ASCENDING':
            return {
                ...state,
                sortBy: 'amountAscending'
            };
        case 'SORT_BY_AMOUNT_DESCENDING':
            return {
                ...state,
                sortBy: 'amountDescending'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};