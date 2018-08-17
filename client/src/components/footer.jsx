import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../services/user';
import 'isomorphic-fetch';
import 'es6-promise';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: []
		};
	}

	componentDidMount() {
		if (userService.isLoggedIn() === true) {
			return userService.me().then(user => {
				this.setState({ user });
			});
		}
	}

	render() {
		const { chirp } = this.props;
		const { user } = this.state;
		console.log(user.id);
		console.log(chirp.userid);
		if (userService.checkLogin() && user.id === chirp.userid) {
			return (
				<Fragment>
					<div className="card-footer text-muted d-flex justify-content-around">
						<Link
							className="small"
							to={{
								pathname: `/chirps/${chirp.id}/edit`,
								state: { content: chirp.content }
							}}
						>
							<i className="far fa-edit mr-1" />
							Edit
						</Link>
						<div className="small">
							<i className="far fa-comment-alt mr-1" />
							Comment
						</div>
						<Link
							className="small"
							to={{
								pathname: `/chirps/${chirp.id}/delete`
							}}
						>
							<i className="fas fa-trash-alt mr-1" /> Delete
						</Link>
					</div>
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<div className="card-footer text-muted d-flex justify-content-around">
						<div className="small">
							<i className="far fa-thumbs-up mr-1" />
							Like
						</div>
						<div className="small">
							<i className="far fa-comment-alt mr-1" />
							Comment
						</div>
						<div className="small">
							<i className="far fa-share-square mr-1" />
							Share
						</div>
					</div>
				</Fragment>
			);
		}
	}
}

export default Footer;
