import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'
function Logout() {

    const dispatch = useDispatch();
    const logoutHanlder = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <>
            <button className='inline-block px-6 duration-0 hover:bg-blue-100 rounded-full' onClick={logoutHanlder}>LogouBtns</button>
        </>
    )
}

export default Logout