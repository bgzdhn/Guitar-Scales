import React from 'react';
import ReactDOM from 'react-dom';

export class Asharp extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/bflatmajorscalepatterns.gif"};
	}

	render(){
		return(
			<div>
				<h2>A&#9839;/B&#9837; Major</h2>				
				<h2>B&#9837; - Cm - Dm - E&#9837; - F - Gm - Adim</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}