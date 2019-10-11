import React from 'react';
import ReactDOM from 'react-dom';

export class Asharp extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/bflatmajorscalepatterns.gif",
			formula: "Bb - Cm - Dm - Eb - F - Gm - Adim"
		};

		this.changeToPentASharp = this.changeToPentASharp.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentASharp(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/bflat-majorpentatonicpositions.gif",
			formula: "Bb - C - D - F - G"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/bflatmajorscalepatterns.gif",
			formula: "Bb - Cm - Dm - Eb - F - Gm - Adim"
		});
	}

	render(){
		return(
			<div>
				<h2>A&#9839;/B&#9837; Major</h2>				
				<button onClick={this.changeToPentASharp}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}