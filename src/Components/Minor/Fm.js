import React from 'react';
import ReactDOM from 'react-dom';

export class Fm extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/f-melodic-minor-scale.gif",
			formula: "Fm - Gdim - Ab; - Bbm - Cm - Db - Eb"
		};

		this.changeToPentFm = this.changeToPentFm.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentFm(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/f-minorpentatonicpositions.gif",
			formula: "F - Ab - Bb - C - Eb"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/f-melodic-minor-scale.gif",
			formula: "Fm - Gdim - Ab; - Bbm - Cm - Db - Eb"
		});
	}
	
	render(){
		return(
			<div>
				<h2>F Minor</h2>				
				<button onClick={this.changeToPentFm}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}