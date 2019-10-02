import React from 'react';
import ReactDOM from 'react-dom';

export class Fmsharp extends  React.Component{	
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/fsharpminorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>F&#9839;/G&#9837; Minor</h2>				
				<h2>F&#9839;m - G&#9839;dim - A - Bm - C&#9839;m - D - E</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}