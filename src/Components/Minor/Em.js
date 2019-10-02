import React from 'react';
import ReactDOM from 'react-dom';

export class Em extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/eminorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>E Minor</h2>			
				<h2>Em - F&#9839;dim - G - Am - Bm - C - D</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}