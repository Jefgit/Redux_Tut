import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IceCreamVIew = () => {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.icecream.numOfIceCream)
  return (
    <div>
        <h2>Number of Ice Cream - {value}</h2>
        <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
        <button onClick={() => dispatch(restocked(5))}>Restock Ice Cream</button>
    </div>
  )
}
