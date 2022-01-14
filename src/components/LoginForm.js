import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginForm = (props) => {
    return (
        <div className="purple-background-login">
            <div className="container">
                <div className="d-flex align-items-center flex-column">
                    <div className="card p-2">
                        <div className="py-4 text-center">
                            <h1 className="my-3 purple-text">Expense Manager</h1>
                        </div>
                        <div className="mx-sm-auto p-3">
                            <h4 className="text-left purple-text border-bottom border-secondary pb-2 text-uppercase">
                                Log in to get started
                            </h4>
                            <div className="text-left purple-text font-weight-bold">
                                <button
                                    className="btn purple-background text-white mb-3 log-in-btn"
                                    name="btnsubmit"
                                    onClick={() => props.dispatch(startLogin())}
                                >
                                    Login with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect()(LoginForm);