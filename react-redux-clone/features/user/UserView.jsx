import React ,{ useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

export const UserView = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    useEffect(() => {
        dispatch(fetchUsers())
    },[])
  return (
    <div>
        <h2>User List</h2>
        {user.loading && <h2>Loading...</h2>}
        {!user.loading && user.error ? <h2>Error: {user.error}</h2> : null}
        <ul>
        {!user.loading && user.users.length 
            ? user.users.map(user => (<li key={user.id}>{user.name}</li>)) 
            : null
        }
        </ul>
    </div>
  )
}
