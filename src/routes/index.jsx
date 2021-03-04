import React from 'react'
import { Router, Route } from 'react-router'
import { createHashHistory } from 'history'
import AppMain from '../containers/main'
import AppNotFound from '../containers/notfound'

const routes = () => (
    <Router history={createHashHistory()}>
        <Route exact path="/" component={AppMain}/>
        <Route path="*" component={AppNotFound}/>
    </Router>
)

export default routes
