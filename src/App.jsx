import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <h1>Testing with react routers</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <IntroComponent />
          </Route>
          <Route path="/first-component">
            <FirstComponent />
          </Route>
          <Route path="/second-component">
            <SecondComponent />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

const IntroComponent = () => {
  return (
    <div>
      <Link to="first-component">Go to first component</Link>
      <Link to="second-component">Go to second component</Link>
    </div>
  );
};

const FirstComponent = () => {
  return <h2>First component</h2>;
};

const SecondComponent = () => {
  return <h2>Second component</h2>;
};

export default App;
