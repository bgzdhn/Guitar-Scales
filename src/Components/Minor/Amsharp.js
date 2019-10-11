import React from 'react';
import ReactDOM from 'react-dom';

export class Amsharp extends  React.Component{	
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/bflatminorscalepatterns.gif",
			formula: "Bbm - Cdim - Db - Ebm - Fm - Gb - Ab"
		};

		this.changeToPentAmSharp = this.changeToPentAmSharp.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentAmSharp(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/bflat-minorpentatonicpositions.gif",
			formula: "Bb - Db - Eb - F - Ab"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/bflatminorscalepatterns.gif",
			formula: "Bbm - Cdim - Db - Ebm - Fm - Gb - Ab"
		});
	}
	
	render(){
		return(
			<div>
				<h2>A&#9839;/B&#9837; Minor</h2>				
				<button onClick={this.changeToPentAmSharp}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}