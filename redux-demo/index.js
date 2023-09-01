const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger('redux-logger') 

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'


// const initialState = {
//     numOfCakes: 10,
//     numOfIceCream : 20
// }

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCream: 20,
}

const orderCake = (qty = 1) => {
    return{
        type: CAKE_ORDERED,
        payload: qty,
    }
}

const restockCake = (qty = 1) => {
    return{
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}
const orderIceCream = (qty = 1) => {
    return{
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

const restockIceCream = (qty = 1) => {
    return{
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED: 
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED:
            return{
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        case ICECREAM_RESTOCKED: 
            return{
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream : iceCreamReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger))

console.log(store.getState())

const unsubscribe = store.subscribe(()=>{})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))
const actions = bindActionCreators({orderCake,restockCake, orderIceCream, restockIceCream}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)


unsubscribe()