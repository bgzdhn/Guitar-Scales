import React from 'react';
import ReactDOM from 'react-dom';

export class A extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/amajorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>A Major</h2>				
				<h2>A - Bm - C&#9839;m - D - E - F&#9839;m - G&#9839;dim</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}
