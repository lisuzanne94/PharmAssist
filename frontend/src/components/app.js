import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Splash from './splash/splash';
import UserProfile from './users/user_profile';

import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        <Switch>
            <AuthRoute exact path='/' component={Splash} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
        
            <ProtectedRoute exact path='/main' component={UserProfile} />
        </Switch>
    </div>
);

export default App;