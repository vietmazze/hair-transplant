import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Youtubers from './components/youtubers/Youtubers';
import Navbar from './components/layout/Navbar';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	});

	return (
		<Router>
			<Fragment>
				<Navbar />
				<div>
					<Switch>
						<Route exact path='/' component={Youtubers} />
					</Switch>
				</div>
			</Fragment>
		</Router>
	);
};

export default App;
