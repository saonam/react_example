import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import './scss/style.scss';
import reducers from './reducers/';
import RouteRoot from './routes/route_root.jsx';

const createStoreWithMiddleware = compose(
      applyMiddleware(thunkMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ) (createStore);

const store = createStoreWithMiddleware(reducers);

if (module.hot) {
	module.hot.accept('./reducers', () => {
	  store.replaceReducer(reducers);
	});
}

ReactDOM.render(
  	<Provider store={store}>
		<RouteRoot />
	</Provider>,
	document.getElementById('root')
);