import React from 'react';
import ReactDOM from 'react-dom';

export class Dsharp extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/eflatmajorscalepatterns.gif",
			formula: "Eb - Fm - Gm - Ab - Bb - Cm - Ddim"
		};

		this.changeToPentDSharp = this.changeToPentDSharp.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentDSharp(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/eb-majorpentatonicpositions.gif",
			formula: "Eb - F - G - Bb - C"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/eflatmajorscalepatterns.gif",
			formula: "Eb - Fm - Gm - Ab - Bb - Cm - Ddim"
		});
	}

	render(){
		return(
			<div>
				<h2>D&#9839;/E&#9837; Major</h2>				
				<button onClick={this.changeToPentDSharp}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}