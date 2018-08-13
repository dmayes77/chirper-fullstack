import React, { Component, Fragment } from 'react';
import AuthButton from './auth/authButton';

class Navigation extends Component {
	render() {
		return (
			<Fragment>
				<div className="navbar fixed-top navbar-default navbar-dark bg-dark">
					<div className="navbar-header">
						<a className="navbar-brand" href="/">
							Home
						</a>
					</div>
					<AuthButton />
				</div>
			</Fragment>
		);
	}
}

export default Navigation;
