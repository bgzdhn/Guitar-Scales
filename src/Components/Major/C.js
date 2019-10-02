import React from 'react';
import ReactDOM from 'react-dom';

export class C extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/cmajorscalepatterns.gif"};
	}

	render(){
		return(
			<div>
				<h2>C Major</h2>				
				<h2>C - Dm - Em - F - G - Am - Bdim</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}