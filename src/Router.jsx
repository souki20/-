import React from "react";
import { Route, Switch } from 'react-router';
import { Diagnose } from "./Components";
import TopPage from "./Components/TopPage";
import Confirmation from "./Confirmation";
import Result from "./Result";


const Router = () => {
  return (
    <Switch>
      <Route exact path={"/diagnose"} component={Diagnose} />
      <Route exact path={"/confirmation"} component={Confirmation} />
      <Route exact path={"/result"} component={Result} />
      <Route exact path={"(/)?"} component={TopPage} />
    </Switch>
  )
}

export default Router;