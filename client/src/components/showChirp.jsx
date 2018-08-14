import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as chirpService from '../services/chirps';
import moment from 'moment';
import 'isomorphic-fetch';
import 'es6-promise';

class ShowChirp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chirp: []
		};
	}

	componentDidMount() {
		chirpService.one(this.props.match.params.id).then(chirp => {
			this.setState({ chirp });
		});
	}

	render() {
		const { chirp } = this.state;
		return (
			<Fragment>
				<Link className="btn btn-primary float-right" to="/chirps/new">
					Let's Chirp!
				</Link>
				<h3 className="my-4">View Post</h3>
				<div className="container">
					<div className="card mb-3">
						<div className="card-body py-2">
							<div className="row mx-0">
								<div className="float-left mr-2 mb-0 h2 d-flex align-items-start">
									<i className="far fa-user-circle" />
								</div>
								<div>
									<h6 className="mb-0 small">
										<Link
											to={{
												pathname: `/chirps/users/${chirp.userid}/`,
												state: { username: chirp.username }
											}}
										>
											@{chirp.username}
										</Link>
									</h6>
									<p className="mb-0 small">
										posted {moment(chirp._created).fromNow()}
									</p>
								</div>
							</div>
							<hr className="mt-2 mb-3" />
							<h6 className="card-text">{chirp.content}</h6>
							<small className="float-right">3 comments</small>
						</div>
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
							<Link className="small" to={`/chirps/${chirp.id}/delete`}>
								<i className="fas fa-trash-alt mr-1" /> Delete
							</Link>
						</div>
					</div>
				</div>
				<Link to={`/chirps`}>
					<i className="fas fa-angle-double-left" /> Back
				</Link>
			</Fragment>
		);
	}
}
export default ShowChirp;
