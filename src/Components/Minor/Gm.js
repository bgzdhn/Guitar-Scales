import React from 'react';
import ReactDOM from 'react-dom';

export class Gm extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/gminorscalepatterns.gif",
			formula: "Gm - Adim - Bb - Cm - Dm - Eb - F"
		};

		this.changeToPentGm = this.changeToPentGm.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentGm(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/g-minorpentatonicpositions.gif",
			formula: "G - Bb - C - D - F"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/gminorscalepatterns.gif",
			formula: "Gm - Adim - Bb - Cm - Dm - Eb - F"
		});
	}
	
	render(){
		return(
			<div>
				<h2>G Minor</h2>				
				<button onClick={this.changeToPentGm}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}