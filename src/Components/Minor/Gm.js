import React from 'react';
import ReactDOM from 'react-dom';

export class Gm extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/gminorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>G Minor</h2>				
				<h2>Gm - Adim - B&#9837; - Cm - Dm - E&#9837; - F</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}