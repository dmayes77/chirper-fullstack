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
			value: props.location.state.content, //passed in from Edit Link in showChirp
			chirp: []
		};
	}

	componentDidMount() {
		chirpService.one(this.props.match.params.id).then(chirp => {
			this.setState({ chirp });
		});
	}

	handleChange(evt) {
		this.setState({ value: evt.target.value });
	}

	handleForm(evt) {
		evt.preventDefault();
		chirpService.update(this.props.match.params.id, {
			content: this.state.value
		});
		this.props.history.push('/');
		location.reload();
	}

	render() {
		const { chirp } = this.state;
		return (
			<Fragment>
				<div className="container">
					<div className="card mb-3">
						<div className="card-body">
							<h6 className="card-title mb-0">@dmayes77</h6>
							<p className="card-caption small">
								posted {moment(chirp._created).fromNow()}
							</p>
							<hr />
							<form className="form-post">
								<div className="form-group">
									<input
										name="content"
										value={this.state.value}
										maxLength="150"
										className="form-control"
										onChange={e => this.handleChange(e)}
										required
									/>
								</div>
							</form>
						</div>
						<div className="card-footer">
							<Link to={`/chirps/${chirp.id}`}>
								<i className="fas fa-angle-double-left" /> Cancel
							</Link>
							<button
								type="submit"
								className="btn btn-primary btn-sm float-right"
								onClick={e => this.handleForm(e)}
								data-dismiss="modal"
							>
								Update
							</button>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default EditChirp;
