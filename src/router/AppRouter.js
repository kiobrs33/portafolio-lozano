import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Layout } from '../components/layout/Layout';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Layout}/>
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
