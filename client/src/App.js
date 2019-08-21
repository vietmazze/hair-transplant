import React, { Fragment, useEffect } from 'react';
import Youtubers from './components/youtubers/Youtubers';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	});

	return (
		<Fragment>
			<Youtubers />
		</Fragment>
	);
};

export default App;
