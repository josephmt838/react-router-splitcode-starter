import React from "react";
import { Switch, Route } from "react-router-dom";
import splits from "./helpers/dynamic-imports";

const { Four0Four, Landing } = splits;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <Landing />} />
        <Route component={Four0Four} />
      </Switch>
    </div>
  );
}

export default App;
