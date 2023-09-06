import { useState } from 'react'
import './App.css'
import { CakeView } from '../features/cake/CakeView'
import { IceCreamVIew } from '../features/icecream/icecreamVIew'
import { UserView } from '../features/user/UserView'


function App() {
  return (
    <div className='App'>
      <CakeView />
      <IceCreamVIew />
      <UserView />
    </div>
  )
}

export default App
