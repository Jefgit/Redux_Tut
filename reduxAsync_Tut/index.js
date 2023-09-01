const redux = require('redux')
const createStore = redux.createStore
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default
const applyMiddleware = redux.applyMiddleware




const initialState = {
    loading: true,
    users: [],
    error: '',
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type : FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

const fetchUsersFailed = (error) => {
    return {
        type : FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USERS_REQUESTED :
            return{
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCEEDED :
            return{
                loading: false,
                users: action.payload,
                error: '',
            }
        case FETCH_USERS_FAILED :
            return{
                loading: false,
                users: [],
                error: action.payload,
            }
        default:
            return state
    }
}

const fetchUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            const users = res.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch((err) => {
            dispatch(fetchUsersFailed(err.message))
        })
    }
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware))

console.log(store.getState())

const unsubscribe = store.subscribe(() => {console.log(store.getState())})

store.dispatch(fetchUsers())

