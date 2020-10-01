import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <header>Testing with react routers</header>
      </div>
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
    </div>
  );
}

const IntroComponent = () => {
  return (
    <div>
      <Link to="first-component">Go to first component</Link>
      <Link to="second-component">Go to second component</Link>
    </div>
  );
};

const FirstComponent = () => {
  return <div>First Component</div>;
};

const SecondComponent = () => {
  return <div>Second Component</div>;
};

export default App;
