import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import AppMain from '../containers/MainIndex'
import AppNotFound from '../containers/NotFound'

const routes = () => (
    <Router>
        <Switch>            
            <Route exact path="/vite-react-resume-poc">
                <AppMain />
            </Route>
            <Route path="*">
                <AppNotFound />
            </Route>            
        </Switch>
    </Router>
)

export default routes
