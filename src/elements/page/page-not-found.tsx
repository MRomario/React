import React, { Fragment } from 'react';
import { NavBarTop } from '../navbar/navbar-top';

export const NotFound: React.FC = () => {
    return (
        <Fragment>
            <NavBarTop />
            <div className="container-fluid">
                <h1>
                    Not Found: 404
                </h1>
            </div>
        </Fragment>
    )
}