import React from 'react'
import { Router, Route, Switch } from 'react-router'
import { createHashHistory } from 'history'
import AppMain from '../containers/main'
import AppNotFound from '../containers/notfound'

let routes = () => (
    <Router history={createHashHistory()}>
        <Switch>
            <Route exact path="/" component={AppMain}/>
            <Route path="*" component={AppNotFound}/>
        </Switch>      
    </Router>
)

export default routes
