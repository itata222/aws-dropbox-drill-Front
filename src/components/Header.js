import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { logoutAction } from '../actions/loginActions'
import { LoginContext } from '../contexts/loginContext'

const Header = () => {
    const {userData,dispatchUserData}=useContext(LoginContext);
    const history=useHistory();
    
    console.log(userData)

    return (
        <div className="header">
            {
                !!userData.token?
                <span onClick={()=>{
                    dispatchUserData(logoutAction())
                }}>
                    Logout
                </span>:
                <span onClick={()=>{
                    history.push('/login')
                }}>
                    Login
                </span>
            }
        </div>
    )
}

export default Header
