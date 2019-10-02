import React from 'react';
import ReactDOM from 'react-dom';

export class E extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/emajorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>E Major</h2>				
				<h2>E - F&#9839;m - G&#9839;m - A - B - C&#9839;m - D&#9839;dim</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}