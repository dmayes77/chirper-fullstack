import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './auth/authButton';

class Navigation extends Component {
	render() {
		return (
			<Fragment>
				<div className="navbar fixed-top navbar-default navbar-dark bg-dark">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/chirps">
							Home
						</Link>
					</div>
					<AuthButton />
				</div>
			</Fragment>
		);
	}
}

export default Navigation;
