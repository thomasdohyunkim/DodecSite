import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from "./components/app.js";
import HomePage from "./components/HomePage.js";

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
	</Route>
);