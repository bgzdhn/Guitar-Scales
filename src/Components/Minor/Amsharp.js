import React from 'react';
import ReactDOM from 'react-dom';

export class Amsharp extends  React.Component{	
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/bflatminorscalepatterns.gif"};
	}
	
	render(){
		return(
			<div>
				<h2>A&#9839;/B&#9837; Minor</h2>				
				<h2>B&#9837;m - Cdim - D&#9837; - E&#9837;m - Fm - G&#9837; - A&#9837;</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}