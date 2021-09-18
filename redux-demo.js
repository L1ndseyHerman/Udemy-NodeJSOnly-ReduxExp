const redux = require('redux');

//  The weird state param syntax is saying that the counter will be 0 if it would otherwise
//  be undefined.
const counterReducer = (state = {counter: 0}, action) => {

    if (action.type === 'increment') {
    //  Probobly want to return mult things here, so an object
    return {
        counter: state.counter + 1
    };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
        }

    //  This will stop it from getting 2 the first increment, avoids the initialization adding 1.
    return state;

};

//  .createStore() is a pre-coded redux method that takes the Reducer Function as a param.
const store = redux.createStore(counterReducer);

//console.log(store.getState());

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

//  .subscribe() is also a pre-coded redux method that takes the... component, I guess, as a param.
store.subscribe(counterSubscriber);

//  The action, sim to useReducer() calls.
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});