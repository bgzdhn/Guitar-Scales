import React from 'react';
import ReactDOM from 'react-dom';

export class Gmsharp extends  React.Component{	
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/aflatminorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>G&#9839;/A&#9837; Minor</h2>				
				<h2>A&#9837;m - B&#9837;dim - C&#9837; - D&#9837;m - E&#9837;m - F&#9837; - G&#9837;</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}