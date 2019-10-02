import React from 'react';
import ReactDOM from 'react-dom';

export class D extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/dmajorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>D Major</h2>				
				<h2>D - Em - F&#9839;m - G - A - Bm - C&#9839;dim</h2>				
				<img src={this.state.scale}/>
			</div>
		);
	}
}