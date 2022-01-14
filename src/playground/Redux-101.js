import { createStore } from 'redux';

//Action Generators - funtion taht return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    };
};

const setCount = ({ count } = {}) => {
    return {
        type: 'SET',
        count
    };
};

const resetCount = () => ({ type: 'RESET' });

//Reducers
//1. Reducers are pure function
//2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const Store = createStore(countReducer);

Store.subscribe(() => {
    console.log(Store.getState());
});

// Store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

Store.dispatch(incrementCount({ incrementBy: 5 }));

Store.dispatch(incrementCount());

Store.dispatch(resetCount());

Store.dispatch(decrementCount());

Store.dispatch(decrementCount({ decrementBy: 10 }));

Store.dispatch(setCount({ count: 101 }));

export default Store;
