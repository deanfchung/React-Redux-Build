import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Main from './main';

const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={Main} />
		</Switch>
	);
};

export default App;
