import React from 'react';
import ReactDOM from 'react-dom';

export class Dmsharp extends  React.Component{	
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/eflatminorscalepatterns.gif",
			formula: "Ebm - Fdim - Gb - Abm - Bbm - Cb - Db"
		};

		this.changeToPentDmSharp = this.changeToPentDmSharp.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentDmSharp(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/eb-minorpentatonicpositions.gif",
			formula: "Eb - Gb - Ab - Bb - Db"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/eflatminorscalepatterns.gif",
			formula: "Ebm - Fdim - Gb - Abm - Bbm - Cb - Db"
		});
	}
	
	render(){
		return(
			<div>
				<h2>D&#9839;/E&#9837; Minor</h2>				
				<button onClick={this.changeToPentDmSharp}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}