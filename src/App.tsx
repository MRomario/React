import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { PageHome } from './elements/page/page-home';
import { NotFound } from './elements/page/page-not-found';
import { PageSignIn } from './elements/page/page-sign-in';
import { PageSignUp } from './elements/page/page-sign-up';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <PageHome />
          </Route>
          <Route path="/sign-in">
            <PageSignIn />
          </Route>
          <Route path="/sign-up">
            <PageSignUp />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
