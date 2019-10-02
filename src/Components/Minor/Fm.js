import React from 'react';
import ReactDOM from 'react-dom';

export class Fm extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/f-melodic-minor-scale.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>F Minor</h2>				
				<h2>Fm - Gdim - A&#9837; - B&#9837;m - Cm - D&#9837; - E&#9837;</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}