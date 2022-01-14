// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SET_CATEGORY
export const categoryAll = () => ({
    type: 'CATEGORY_ALL'
});

export const categoryFood = () => ({
    type: 'CATEGORY_FOOD'
});

export const categoryHealth = () => ({
    type: 'CATEGORY_HEALTH'
});

export const categoryTransport = () => ({
    type: 'CATEGORY_TRANSPORT'
});

export const categoryEntertainment = () => ({
    type: 'CATEGORY_ENTERTAINMENT'
});

export const categoryOthers = () => ({
    type: 'CATEGORY_OTHERS'
});

// SORT_BY_DATE
export const sortByDateAscending = () => ({
    type: 'SORT_BY_DATE_ASCENDING'
});

export const sortByDateDescending = () => ({
    type: 'SORT_BY_DATE_DESCENDING'
});

// SORT_BY_AMOUNT
export const sortByAmountAscending = () => ({
    type: 'SORT_BY_AMOUNT_ASCENDING'
});

export const sortByAmountDescending = () => ({
    type: 'SORT_BY_AMOUNT_DESCENDING'
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});