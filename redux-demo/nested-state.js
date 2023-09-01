const redux = require('redux')
const createStore = redux.createStore 
const produce = require('immer').produce


const UPDATE_STREET = 'UPDATE_STREET'

const initialState = {
    name: 'Jef',
    address: {
        street: 'zone 4',
        city: 'Gattaran',
        state: 'Cagayan',
    }
}

const updateStreet = (street) =>{
    return{
        type: UPDATE_STREET,
        payload: street
    }
}

const reducer = (state  = initialState, action) => {
    switch (action.type) {
        case UPDATE_STREET:
            // return{
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // } 
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default:
            return state
    }
}

const store = createStore(reducer)

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(()=> {console.log('state updated', store.getState())})

store.dispatch(updateStreet('zone 3'))

unsubscribe()