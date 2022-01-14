import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import AppRouter, { history } from "./routers/AppRouter";
import { firebase } from './firebase/firebase';

const store = configureStore();

const App = () => {
    const [loading, setLoading] = useState(false);

    const fetchExpenses = async () => {
        setLoading(true);
        try {
            await store.dispatch(startSetExpenses(store.dispatch)).then(() => setLoading(false));
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                store.dispatch(login(user.uid));
                fetchExpenses();
                if (history.location.pathname === '/') {
                    history.push('/dashboard');
                }
            } else {
                store.dispatch(logout());
                history.push('/');
            }
        });
    }, []);

    if (loading) {
        return (
            <main>
                <p>Loading...</p>
            </main>
        )
    }
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}

export default App;