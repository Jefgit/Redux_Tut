const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCream: 20
}

const icereamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCream --
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        }
    },
    extraReducers: {
        ['cake/ordered']: (state) => {
            state.numOfIceCream--
        }
    }
})

module.exports = icereamSlice.reducer
module.exports.icecreamActions = icereamSlice.actions