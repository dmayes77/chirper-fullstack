import React, { Component, Fragment } from 'react';
import IndexChirps from './indexChirps';
import NewChirp from './newChirp';

let url = '/api/chirps/';

class Post extends Component {
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

		this.addChirp = () => {
			fetch(url)
				.then(response => response.json())
				.then(chirps => {
					this.setState({ chirps });
				});
		};

		this.newChirp = () => {
			fetch(url, {
				method: 'POST',
				body: JSON.stringify({
					content: this.state.content
				}),
				headers: new Headers({ 'Content-Type': 'application/json' })
			}).then(postChirp => this.addChirp(postChirp));
		};
	}

	componentDidMount() {
		this.addChirp();
	}

	handleInput(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleForm(event) {
		event.preventDefault();
		this.newChirp();
		this.clearForm();
	}

	render() {
		return (
			<Fragment>
				<div className="container">
					<NewChirp />
					<h3 className="my-4">Recent Posts</h3>
					<div className="container">
						<div id="list" className="list-group d-flex flex-column-reverse">
							{this.state.chirps.map(chirp => {
								return <IndexChirps key={chirp.id} chirp={chirp} />;
							})}
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Post;
