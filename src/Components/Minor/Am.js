import React from 'react';
import ReactDOM from 'react-dom';

export class Am extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/aminorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>A Minor</h2>
				<h2>Am - Bdim - C - Dm - Em - F - G</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}
