import React from 'react';
import ReactDOM from 'react-dom';

export class Bm extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/bminorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>B Minor</h2>				
				<h2>Bm - C&#9839;dim - D - Em - F&#9839;m - G - A</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}