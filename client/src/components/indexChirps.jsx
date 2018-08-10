import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as chirpService from '../services/chirps';
import moment from 'moment';
import 'isomorphic-fetch';
import 'es6-promise';

class Chirps extends Component {
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
		let chirp = this.props.chirp;
		return (
			<Fragment>
				<div className="card mb-3">
					<div className="card-body pb-2">
						<h6 className="card-title mb-0">@dmayes77</h6>
						<p className="card-caption small">
							posted {moment(chirp._created).fromNow()}
						</p>
						<hr />
						<h6 className="card-text">{chirp.content}</h6>
						<hr className="mb-2" />
						<small className="float-right">3 comments</small>
					</div>
					<div className="card-footer text-muted">
						<i
							id={chirp.id}
							className="fas fa-trash-alt btn btn-primary btn-sm float-right"
							onClick={e => this.handleDelete(e)}
						/>
						<Link className="small" to={`/chirps/${chirp.id}`}>
							View
						</Link>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Chirps;
