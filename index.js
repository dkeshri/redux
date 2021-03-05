const redux = require('redux')
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE';
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}
const initialState = {
    numOfCakes: 10
}
// reducer have (previous_state,action )
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,// sprade operation copy all the data in tha state object
            numOfCakes: state.numOfCakes - 1// this line only change the nunOfCake property of state object rest remain same.
        }
        default: return state;
    }
}
const store = createStore(reducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

//after calling all the action call unsubscribe method
unsubscribe();