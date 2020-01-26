import React, { Fragment } from 'react';
import { NavBarTop } from '../navbar/navbar-top';

export const PageHome: React.FC = () => {
    return (
        <Fragment>
            <NavBarTop />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <h4>Home page</h4>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}