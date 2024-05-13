import { useState, useEffect } from 'react'
import config from './config/config'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { logout, login } from './store/store'
import { Header } from './components'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.authChek().
    then((userData) => {
      if(userData) {
        dispatch(login(userData))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))

  },[])

  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header/>
          <main>
            
          </main>
          <Footer/>
        </div>
      </div>
    </>
  ) : (
    <div>hello</div>
  )
}

export default App
