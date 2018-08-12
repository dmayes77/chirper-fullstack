import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as chirpService from '../services/chirps';
import moment from 'moment';
import 'isomorphic-fetch';
import 'es6-promise';

class DeleteChirp extends Component {
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

	handleDelete() {
		chirpService
			.destroy(this.props.match.params.id)
			.then(this.props.history.push('/'))
			.then(location.reload());
	}

	render() {
		const { chirp } = this.state;
		return (
			<Fragment>
				<button
					id={chirp.id}
					className="btn btn-danger float-right"
					onClick={e => this.handleDelete(e)}
				>
					Yes, delete!
				</button>
				<h3 className="my-4">Delete Post</h3>
				<h6 className="text-danger text-center">
					Are you sure you want to delete this post? You can edit instead!
				</h6>
				<div className="container">
					<div className="card mb-3">
						<div className="card-body py-2">
							<div className="float-left mr-2 h2">
								<i className="far fa-user-circle" />
							</div>
							<h6 className="mb-0 small">@dmayes77</h6>
							<p className="mb-0 small">
								posted {moment(chirp._created).fromNow()}
							</p>
							<hr className="mt-2 mb-3" />
							<h6 className="card-text">{chirp.content}</h6>
							<small className="float-right">3 comments</small>
						</div>
						<div className="card-footer text-muted d-flex justify-content-around">
							<Link className="small" to={`/chirps/${chirp.id}`}>
								<i className="fas fa-ban mr-1" />
								Cancel
							</Link>
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
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default DeleteChirp;
