import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router';
import { LoginContext } from '../contexts/loginContext'

const UnLoggedRoute = ({ component: Component, ...rest }) => {
    const {userData}=useContext(LoginContext);

    return (
        <Route 
        {...rest}
            component={(props) => (
                !userData.token ?
                    <Component {...props} />
                    : <Redirect to={{ pathname: "/home" }} />
            )}
        />
    )
}

export default UnLoggedRoute