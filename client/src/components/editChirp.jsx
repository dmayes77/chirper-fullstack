import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'isomorphic-fetch';
import 'es6-promise';

class EditChirp extends Component {
	constructor(props) {
		super(props);
		this.state = { chirps: [] };
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
					content: this.state.content
				}),
				new: true,
				headers: new Headers({ 'Content-Type': 'application/json' })
			}).then(postChirp => this.addChirp(postChirp));
		};
	}

	componentDidMount() {
		this.addChirp();
	}
	handleInput(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
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
										maxLength="150"
										className="form-control"
										placeholder={chirp.content}
										onChange={e => this.handleInput(e)}
										required
									/>
								</div>
							</form>
						</div>
						<div className="card-footer">
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
