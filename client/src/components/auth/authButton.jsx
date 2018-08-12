import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = props => {
	if (isLoggedIn()) {
		return (
			<Link className="btn btn-link text-white" to="/logout">
				<i className="fas fa-sign-out-alt" /> Logout
			</Link>
		);
	} else {
		return (
			<Link className="btn btn-link text-white" to="/login">
				<i className="fas fa-sign-in-alt" /> Login
			</Link>
		);
	}
};

export default AuthButton;
