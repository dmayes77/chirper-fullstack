import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as chirpService from '../services/chirps';
import moment from 'moment';
import 'isomorphic-fetch';
import 'es6-promise';

class ChirpCard extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		chirpService.all().then(chirps => {
			this.setState({ chirps });
		});
	}

	handleDelete(evt) {
		chirpService.destroy(evt.target.id);
		location.reload();
	}

	render() {
		const { chirp } = this.props;
		return (
			<Fragment>
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
						<Link className="small" to={`/chirps/${chirp.id}`}>
							<i className="fab fa-readme mr-1" />
							Read
						</Link>
					</div>
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
				</div>
			</Fragment>
		);
	}
}

export default ChirpCard;
