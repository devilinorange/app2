import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../../pages/login';
import MainPage from '../../pages/main';
import NonePage from '../../pages/none';
import NewsPage from '../../pages/news';
import ProfilePage from '../../pages/profile';
import PrivateRouteContainer from '../PrivateRouteContainer';

export default () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/news" component={NewsPage} />
    <PrivateRouteContainer path="/profile" component={ProfilePage} />
    <Route component={NonePage} />
  </Switch>
);
