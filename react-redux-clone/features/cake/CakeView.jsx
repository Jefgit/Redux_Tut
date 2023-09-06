import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {

    const dispatch = useDispatch()
    const value = useSelector((state) =>  state.cake.numOfCake)
  return (
    <div>
        <h2>Number of Cakes - {value}</h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(restocked(3))}>Restock Cake</button>
    </div>
  )
}
