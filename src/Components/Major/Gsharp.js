import React from 'react';
import ReactDOM from 'react-dom';

export class Gsharp extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/aflatmajorscalepatterns.gif"};
	}

	render(){
		return(
			<div>
				<h2>G&#9839;/A&#9837; Major</h2>				
				<h2>A&#9837; - B&#9837;m - Cm - D&#9837; - E&#9837; - Fm - Gdim</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}