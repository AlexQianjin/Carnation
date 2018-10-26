import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProjectTable from './ProjectTable/ProjectTable';
import ProjectLaunch from './ProjectTable/ProjectLaunch';

const AppRouter = () => (
    <Router>
        <div>
        <header>
            <h1>React zoid Demo</h1>
            <ul>
                <li><Link to="/projects/">Projects</Link></li>
            </ul>
        </header>
        <Route path="/projects/" exact component={ProjectTable} />
        <Route path="/projects/launch/:id" exact component={ProjectLaunch} />
      </div>
    </Router>
);

export default AppRouter;
