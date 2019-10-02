import React from 'react';
import ReactDOM from 'react-dom';

export class Dmsharp extends  React.Component{	
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/eflatminorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>D&#9839;/E&#9837; Minor</h2>				
				<h2>E&#9837;m - Fdim - G&#9837; - A&#9837;m - B&#9837;m - C&#9837; - D&#9837;</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}