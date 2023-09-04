import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IceCreamView = () => {
    const [value, setValue] = useState(1)
    const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of Ice cream - {numOfIceCream}</h2>
        <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
        <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
        <button onClick={()=> dispatch(restocked(value))}>Restock Ice cream</button>
    </div>
  )
}

