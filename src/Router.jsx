import React from "react";
import { Route, Switch } from 'react-router';
import { Diagnose } from "./Components";
import TopPage from "./Components/TopPage";
import Confirmation from "./Confirmation";


const Router = () => {
  return (
    <Switch>
      <Route exact path={"/diagnose"} component={Diagnose} />
      <Route exact path={"/confirmation"} component={Confirmation} />
      <Route exact path={"(/)?"} component={TopPage} />
    </Switch>
  )
}

export default Router;