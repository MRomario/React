import React from 'react';
import { NavBarTop } from '../navbar/navbar-top';
import { FormSignIn } from '../form/form-sign-in';

export const PageSignIn: React.FC = () => {
    return (
        <>
            <NavBarTop />
            <div className="container-fluid">
                <FormSignIn />
            </div>
        </>
    )
}