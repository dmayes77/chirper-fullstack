import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as chirpService from '../services/chirps';
import 'isomorphic-fetch';
import 'es6-promise';

class NewChirp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: '',
			chirps: []
		};

		this.clearForm = () => {
			this.setState({
				content: ''
			});
		};
	}

	handleInput(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleForm(evt) {
		evt.preventDefault();
		chirpService
			.insert({ content: this.state.content })
			.then(this.props.history.push('/'))
			.then(this.clearForm())
			.then(location.reload());
	}

	render() {
		return (
			<Fragment>
				<h3 className="my-4">Add New Chirp</h3>
				<div className="container">
					<div className="card mb-3">
						<div className="card-body py-2">
							<div className="float-left mr-2 h2">
								<i className="far fa-user-circle" />
							</div>
							<div className="d-flex align-items-baseline">
								<h6 className="mb-0">@dmayes77</h6>
							</div>
							<form className="form-post">
								<div className="form-group">
									<input
										name="content"
										maxLength="150"
										className="form-control"
										placeholder="What's on your mind?"
										onChange={e => this.handleInput(e)}
										required
									/>
								</div>
							</form>
						</div>
						<div className="card-footer text-muted d-flex justify-content-around">
							<Link className="small" to="/">
								<i className="fas fa-times" /> Close
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

export default NewChirp;
