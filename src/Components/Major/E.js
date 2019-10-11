import React from 'react';
import ReactDOM from 'react-dom';

export class E extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/emajorscalepatterns.gif",
			formula: "E - F#m - G#m - A - B - C#m - Ddim#"
		};

		this.changeToPentE = this.changeToPentE.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentE(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/e-majorpentatonicpositions.gif",
			formula: "E - F# - G# - B - C#"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/emajorscalepatterns.gif",
			formula: "E - F#m - G#m - A - B - C#m - Ddim#"
		});
	}
	
	render(){
		return(
			<div>
				<h2>E Major</h2>				
				<button onClick={this.changeToPentE}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}