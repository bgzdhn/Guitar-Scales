import React from 'react';
import ReactDOM from 'react-dom';

export class Fsharp extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/fsharpmajorscalepatterns.gif"};
	}

	render(){
		return(
			<div>
				<h2>F&#9839;/G&#9837; Major</h2>				
				<h2>F&#9839; - G&#9839;m - A&#9839;m - B - C&#9839; - D&#9839;m - E&#9839;dim</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}