import React from 'react';
import ReactDOM from 'react-dom';

export class B extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/bmajorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>B Major</h2>				
				<h2>B - C&#9839;m - D&#9839;m - E - F&#9839; - G&#9839;m - A&#9839;dim</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}