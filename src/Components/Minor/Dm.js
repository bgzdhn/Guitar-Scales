import React from 'react';
import ReactDOM from 'react-dom';

export class Dm extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/dminorscalepatterns.gif",
			formula: "Dm - Edim - F - Gm - Am - Bb - C"
		};

		this.changeToPentDm = this.changeToPentDm.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentDm(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/d-minorpentatonicpositions.gif",
			formula: "D - F - G - A - C"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/dminorscalepatterns.gif",
			formula: "Dm - Edim - F - Gm - Am - Bb - C"
		});
	}
	
	render(){
		return(
			<div>
				<h2>D Minor</h2>				
				<button onClick={this.changeToPentDm}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}