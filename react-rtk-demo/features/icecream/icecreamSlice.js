import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'
import { restocked as cakeRestocked } from '../cake/cakeSlice'

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
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIceCream--
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIceCream--
        })
    }
})

export default icereamSlice.reducer
export const { ordered, restocked } = icereamSlice.actions