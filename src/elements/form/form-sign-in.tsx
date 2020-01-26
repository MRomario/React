import React, { useState } from 'react';
import $ from 'jquery';
import * as EmailValidator from 'email-validator';
import { Link } from 'react-router-dom';

export const FormSignIn: React.FC = () => {

    const validatePassword = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})`);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [statusEmail, setStatusEmail] = useState<boolean>(false);
    const [statusPassword, setStatusPassword] = useState<boolean>(false);

    const handlerInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const elementHelp = $(`.singin-help-email`);
        const alertHelpEmail = $(`.alert-help-email`);

        let inputEmail = e.target.value;
        setEmail(inputEmail);

        if (!EmailValidator.validate(inputEmail)) {
            alertHelpEmail.removeClass('d-none');
            elementHelp.removeClass('badge-dark badge-success').addClass('badge-warning').text('Error email');
            setStatusEmail(false);
        } else {
            alertHelpEmail.removeClass('d-block').addClass('d-none');
            elementHelp.removeClass('badge-warning').addClass('badge badge-success').text('Ok');
            setStatusEmail(true);
        }
    };

    const handlerInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const inputPassword = e.target.value;
        const elementHelp = $('.singin-help-password');
        const alertHelpPassword = $('.alert-help-password');
        setPassword(inputPassword);

        const result = validatePassword.test(inputPassword);
        if (!result) {
            alertHelpPassword.removeClass('d-none');
            elementHelp.removeClass('badge-dark badge-success').addClass('badge-warning').text('Error password');
            setStatusPassword(false);
        } else {
            alertHelpPassword.removeClass('d-block').addClass('d-none');
            elementHelp.removeClass('badge-warning').removeClass('d-none').addClass('badge badge-success').text('Ok');
            setStatusPassword(true);
        }
    };

    const handlerBtnSingIn = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (statusEmail && statusPassword) {
            console.log(email, password);
        }

    };

    return (
        <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 clearfix">
                <h4 className="mb-3">Sign in</h4>
                <div className="form-group mb-3">
                    <label className="lead">Email</label>
                    <input className="form-control singin-email mb-1" value={email} onChange={handlerInputEmail}></input>
                    <small className="badge badge-dark singin-help-email">Enter email addres</small>
                    <div className="alert alert-warning alert-help-email mt-2 mb-0 pt-1 pl-2 pb-2 pr-2 d-none">
                        <small>
                            <b>Example: email@mail.com</b>
                        </small>
                    </div>
                </div>
                <div className="form-group mb-2">
                    <label className="lead">Password</label>
                    <input className="form-control singin-password mb-1" value={password} onChange={handlerInputPassword}></input>
                    <small className="badge badge-dark singin-help-password">Enter password</small>
                    <div className="alert alert-warning alert-help-password mt-2 pt-1 pl-2 pb-2 pr-2 d-none">
                        <small>
                            <b>Password must contain:</b>
                        </small>
                        <ul>
                            <li>
                                <small>at least 8 letters</small>
                            </li>
                            <li>
                                <small>latin letters only</small>
                            </li>
                            <li>
                                <small>one or more uppercase letters</small>
                            </li>
                            <li>
                                <small>one or more lowercase letters</small>
                            </li>
                            <li>
                                <small>one or more numbers</small>
                            </li>
                            <li>
                                <small>one or more special characters</small>
                            </li>
                        </ul>
                        <small><b>Example: MyPass88!</b></small>
                    </div>
                </div>
                <div className="form-group clearfix mb-2">
                    <Link className="btn btn-link text-left pl-0" to="/sign-up">Sign up</Link>
                    <Link className="btn btn-link text-left pl-0" to="/">Restore</Link>
                    <button className="btn btn-light float-right" onClick={handlerBtnSingIn}>Login</button>
                </div>
            </div>
        </div>
    )
};