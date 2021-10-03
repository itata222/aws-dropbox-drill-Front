import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from '../components/Home'
import TasksContextProvider from '../contexts/imagesContext';
import LoginContextProvider from '../contexts/loginContext';
import UnLoggedRoute from './UnLoggedRoute';
import Login from '../components/Login';
import LoggedRoute from './LoggedRoute';
import Header from '../components/Header';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <LoginContextProvider>
                <TasksContextProvider>
                    <Header />
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/home" />
                        </Route>
                        <LoggedRoute path="/home" component={Home} />
                        <UnLoggedRoute path="/login" component={Login} />
                    </Switch>
                </TasksContextProvider>
            </LoginContextProvider>
        </BrowserRouter>
    )
}

export default AppRoute

