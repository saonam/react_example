import React from 'react';
import { renderRoutes } from 'react-router-config'
import asyncComponent from './async_component.jsx';

import App from '../components/app.jsx';

import {
    HashRouter as Router,
    // BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

  const routes = [
	{
		path: '/',
        component: App,
    	routes: [
            {
				path: '/',
				exact: true,
				component: asyncComponent(
					() => System.import('../containers/home.jsx').then(module => module.default),
					{ name: 'index' }
				)
			},
			{
				path: '/home',
				exact: true,
				component: asyncComponent(
					() => System.import('../containers/home.jsx').then(module => module.default),
					{ name: 'index' }
				)
			},
        ]
    }
]
const RouteRoot = ()=>(
	<Router>
		{renderRoutes(routes)}
	</Router>
)
export default RouteRoot