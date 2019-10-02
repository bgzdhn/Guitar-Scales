import React from 'react';
import ReactDOM from 'react-dom';

export class F extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/fmajorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>F Major</h2>				
				<h2>F - Gm - Am - B&#9837; - C - Dm - Edim</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}