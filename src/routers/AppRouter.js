import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpense from '../components/EditExpense';
import AddExpense from '../components/AddExpense';
import LoginForm from '../components/LoginForm';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <>
            <Switch>
                <PublicRoute path="/" component={LoginForm} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpense} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
            </Switch>
        </>
    </Router>
);

export default AppRouter;
