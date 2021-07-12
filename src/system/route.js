import React from "react";
import {
    Route,
    Switch,
    Redirect,
} from "react-router-dom"
// pages
import Dashboard from "../pages/dashboard";
import Typography from "../pages/typography";
import Notifications from "../pages/notifications";
import Maps from "../pages/maps";
import Tables from "../pages/tables/Tables";
import Example from "../pages/tables/examples";

import Icons from "../pages/icons";
import Charts from "../pages/charts/Charts";
import Graphs from "../pages/charts/Graph";

const AllRoute = (
        <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/typography" component={Typography} />
            <Route path="/app/tables" component={Tables} />
            <Route path="/app/example" component={Example} />
            <Route path="/app/graphs" component={Graphs} />

            <Route path="/app/notifications" component={Notifications} />
            <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
            />
            <Route path="/app/ui/maps" component={Maps} />
            <Route path="/app/ui/icons" component={Icons} />
            <Route path="/app/ui/charts" component={Charts} />
        </Switch>

    );

export default AllRoute;
