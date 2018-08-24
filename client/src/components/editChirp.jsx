import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as chirpService from '../services/chirps';
import moment from 'moment';
import 'isomorphic-fetch';
import 'es6-promise';

class EditChirp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: props.location.state.content, //passed in from Edit Link in showChirp
			chirp: []
		};
	}

	componentDidMount() {
		chirpService.one(this.props.match.params.id).then(chirp => {
			this.setState({ chirp });
		});
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleForm(evt) {
		evt.preventDefault();
		chirpService
			.update(this.props.match.params.id, {
				content: this.state.value
			})
			.then(this.props.history.push(`/chirps/${this.props.match.params.id}`));
	}

	render() {
		const { chirp } = this.state;
		return (
			<Fragment>
				<Link className="btn btn-primary float-right" to="/chirps/new">
					Let's Chirp!
				</Link>
				<h3 className="my-4">Edit Post</h3>
				<div className="container">
					<div className="card mb-3">
						<div className="card-body py-2">
							<div className="row mx-0">
								<div className="float-left mr-2 mb-0 h2 d-flex align-items-start">
									<i className="far fa-user-circle" />
								</div>
								<div>
									<Link
										to={{
											pathname: `/chirps/users/${chirp.userid}/`,
											state: { username: chirp.username }
										}}
									>
										@{chirp.username}
									</Link>
									<p className="mb-0 small">
										posted {moment(chirp._created).fromNow()}
									</p>
								</div>
							</div>
							<hr className="mt-2 mb-3" />
							<form className="form-post">
								<div className="form-group">
									<input
										name="content"
										value={this.state.content}
										maxLength="150"
										className="form-control"
										onChange={e => this.handleChange(e)}
										required
									/>
								</div>
							</form>
						</div>
						<div className="card-footer text-muted d-flex justify-content-around">
							<Link className="small" to={`/chirps/${chirp.id}`}>
								<i className="fas fa-times mr-1" />
								Close
							</Link>
							<Link className="small" onClick={e => this.handleForm(e)} to="#">
								<i className="far fa-save mr-1" />
								Save
							</Link>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default EditChirp;
