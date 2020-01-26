import React from 'react';
import { NavBarTop } from '../navbar/navbar-top';
import { FormSignUp } from '../form/form-sign-up';

export const PageSignUp: React.FC = () => {
    return (
        <>
            <NavBarTop />
            <div className="container-fluid">
                <FormSignUp />
            </div>
        </>
    )
}