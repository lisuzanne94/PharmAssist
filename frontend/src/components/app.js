import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Splash from './splash/splash';
import Calendar from './calendar/calendar';
import Modal from './modal/modal';

import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Test from '../components/test/test_con'



const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        {/* <Test /> */}
        <Switch>
            
            <Calendar />
            <AuthRoute exact path='/' component={Splash} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;