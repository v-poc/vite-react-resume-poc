import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import AppMain from '../containers/MainIndex'
import AppNotFound from '../containers/AppNotFound'

const routes = () => (
    <Router>
        <Routes>            
            <Route path="/vite-react-resume-poc" element={<AppMain />} />               
            <Route path="*" element={<AppNotFound />} />        
        </Routes>
    </Router>
)

export default routes
