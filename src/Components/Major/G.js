import React from 'react';
import ReactDOM from 'react-dom';

export class G extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/gmajorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>G Major</h2>
				<h2>G - Am - Bm - C - D - Em - F&#9839;dim</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}