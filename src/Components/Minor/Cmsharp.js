import React from 'react';
import ReactDOM from 'react-dom';

export class Cmsharp extends  React.Component{	
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/csharpminorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>C&#9839;/D&#9837; Minor</h2>				
				<h2>C&#9839;m - D&#9839;dim - E - F&#9839;m - G&#9839;m - A - B</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}