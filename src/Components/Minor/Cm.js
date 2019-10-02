import React from 'react';
import ReactDOM from 'react-dom';

export class Cm extends  React.Component{	
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/cminorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>C Minor</h2>				
				<h2>Cm - Ddim - E&#9837; - Fm - Gm - A&#9837; - B&#9837; </h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}