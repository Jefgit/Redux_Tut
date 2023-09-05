import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './userSlice'

export const UserView = () => {
  const dispatch = useDispatch()
  const user = useSelector((state => state.user))
  useEffect(()=> {
    dispatch(fetchUser())
  }, [])

  return (
    <div>
        <h2>List of Users</h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ? <div><h2>Error: {user.error}</h2></div> : null}
        {!user.loading && user.users.length ?  
          <div>
            <ul>
              {user.users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
          </div>
          : null
        }
        
        <button>Fetch Users</button>
    </div>
  )
}
