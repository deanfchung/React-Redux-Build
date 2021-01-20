import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import reducers from './reducers';
import App from './containers';
import GlobalStyle from './utils/stylesheets';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

render(
	<Provider store={store}>
		<BrowserRouter>
			<GlobalStyle />
			<App />
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);

module.hot ? module.hot.accept() : null;
