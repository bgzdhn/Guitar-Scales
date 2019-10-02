import React from 'react';
import ReactDOM from 'react-dom';

export class Dsharp extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {scale: "https://www.guitar-chords.org.uk/scales-images/eflatmajorscalepatterns.gif"};
	}

	render(){
		return(
			<div>
				<h2>D&#9839;/E&#9837; Major</h2>				
				<h2>E&#9837; - Fm - Gm - A&#9837; - B&#9837;m - Cm - Ddim</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}