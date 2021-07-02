import React from 'react';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Homepage} from './components/views/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
        <Route exact path='/' component={Homepage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
