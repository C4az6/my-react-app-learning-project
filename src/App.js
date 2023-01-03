import React, { Component, lazy, Suspense } from "react";
import { Switch, Route } from 'react-router';
import Loading from './14-Loading';

// const MainComponent = lazy(() => import('./14-Main'))

class App extends Component {
  async importModule() {
    const { plus } = await import('./13-2-module');

    console.log(plus(1, 2))
  }
  /* render() {
    return (
      <Suspense fallback={<Loading></Loading>}>
        <MainComponent></MainComponent>
      </Suspense>
    );
  } */


  render() {
    return (
      <Suspense fallback={<Loading></Loading>}>
        <div className="app">
          <Switch>
            <Route exact path="/" component={lazy(() => import('./views/Home'))}></Route>
            <Route path="/page1" component={lazy(() => import('./views/Page1'))}></Route>
            <Route page="/page2" component={lazy(() => import('./views/Page2'))}></Route>
          </Switch>
        </div>
      </Suspense>
    )
  }
}

export default App;