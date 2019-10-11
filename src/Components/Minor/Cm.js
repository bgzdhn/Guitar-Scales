import React from 'react';
import ReactDOM from 'react-dom';

export class Cm extends  React.Component{	
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/cminorscalepatterns.gif",
			formula: "Cm - Ddim - Eb - Fm - Gm - Ab - Bb"
		};

		this.changeToPentCm = this.changeToPentCm.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentCm(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/c-minorpentatonicpositions.gif",
			formula: "C - Eb - F - G - Bb"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/cminorscalepatterns.gif",
			formula: "Cm - Ddim - Eb - Fm - Gm - Ab - Bb"
		});
	}
	
	render(){
		return(
			<div>
				<h2>C Minor</h2>				
				<button onClick={this.changeToPentCm}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}