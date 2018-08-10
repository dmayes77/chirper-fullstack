import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'isomorphic-fetch';
import 'es6-promise';

class EditChirp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.location.state.content, //passed in from Edit Link
			chirps: []
		};
		console.log(this.state.value);
		this.handleChange = this.handleChange.bind(this);
		this.url = `/api/chirps/${this.props.match.params.id}`;

		this.addChirp = () => {
			fetch(this.url)
				.then(response => response.json())
				.then(chirps => {
					this.setState({ chirps });
				});
		};

		this.editChirp = () => {
			fetch(this.url, {
				method: 'Put',
				body: JSON.stringify({
					content: this.state.value
				}),
				new: true,
				headers: new Headers({ 'Content-Type': 'application/json' })
			}).then(postChirp => this.addChirp(postChirp));
		};
	}

	componentDidMount() {
		this.addChirp();
	}
	handleChange(evt) {
		this.setState({ value: evt.target.value });
	}

	handleForm(evt) {
		evt.preventDefault();
		this.editChirp();
		this.props.history.push('/');
		location.reload();
	}

	render() {
		let chirp = this.state.chirps;
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
										onChange={this.handleChange}
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
