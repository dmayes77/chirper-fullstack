import React, { Component } from 'react';
import Chirp from './Chirp';

class Chirps extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-8 offset-2">
						<h3 className="text-center my-4">Recent Posts</h3>
						<div className="col-12">
							<ul id="list" className="list-group">
								{this.props.value.map(chirp => {
									return (
										<Chirp
											name={chirp.name}
											chirp={chirp.chirp}
											key={chirp._id}
										/>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Chirps;
