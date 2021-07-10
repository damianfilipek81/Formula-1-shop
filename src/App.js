import React from 'react';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Homepage } from './components/views/Homepage/Homepage';
import { Product } from './components/views/Product/Product';
import { Shop } from './components/views/Shop/Shop';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/product/:id' component={Product} />
          <Route exact path='/shop' component={Shop} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
