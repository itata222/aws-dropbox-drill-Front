import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import { loginAction } from '../actions/loginActions';
import { LoginContext } from '../contexts/loginContext';
import { loginToDB } from '../services/userService';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const {dispatchUserData}=useContext(LoginContext);
    const history=useHistory();

    const submitLogin=(e)=>{
        e.preventDefault();
        loginToDB({email,password}).then((data)=>{
            dispatchUserData(loginAction({user:data.user,token:data.token}))
            history.push('/home')
        }).catch((e)=>setShowErrorMessage(true))
    }

    return (
        <div className="login">
            <form onSubmit={submitLogin}>
                <input placeholder="email" type="email" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <input placeholder="password" type="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                {showErrorMessage&&<div className="error-message">Unable to login</div>}
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
