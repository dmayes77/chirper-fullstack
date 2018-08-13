import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import ShowChirp from './showChirp';
import NewChirp from './newChirp';
import EditChirp from './editChirp';
import DeleteChirp from './deleteChirp';
import UserChirps from './userChirps';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import Navigation from './nav';

import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<Navigation />
					<main role="main">
						<div className="row jumbotron bg-primary justify-content-center mt-5">
							<h1 className="text-white display-3">Chirper</h1>
						</div>
						<div className="container">
							<Switch>
								{/* Will eventually become a landing page */}
								<Route exact path="/" component={Home} />
								<Route exact path="/chirps" component={Home} />
								<PrivateRoute exact path="/chirps/new" component={NewChirp} />
								<Route
									exact
									path="/chirps/users/:userid"
									component={UserChirps}
								/>
								<Route exact path="/chirps/:id" component={ShowChirp} />
								<PrivateRoute
									exact
									path="/chirps/:id/edit"
									component={EditChirp}
								/>
								<PrivateRoute
									path="/chirps/:id/delete"
									component={DeleteChirp}
								/>
								<Route path="/login" component={Login} />
								<Route path="/logout" component={Logout} />
							</Switch>
						</div>
					</main>
				</Fragment>
			</Router>
		);
	}
}
export default App;
