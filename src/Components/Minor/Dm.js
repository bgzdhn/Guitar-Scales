import React from 'react';
import ReactDOM from 'react-dom';

export class Dm extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/dminorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>D Minor</h2>				
				<h2>Dm - Edim - F - Gm - Am - B&#9837; - C</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}