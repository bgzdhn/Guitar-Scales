import React from 'react';
import ReactDOM from 'react-dom';

export class Gmsharp extends  React.Component{	
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/aflatminorscalepatterns.gif",
			formula: "Abm - Bbdim - Cb - Dbm - Ebm - Fb - Gb"
		};

		this.changeToPentGmSharp = this.changeToPentGmSharp.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}
	
	changeToPentGmSharp(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/gsharp-minorpentatonicpositions.gif",
			formula: "G# - B - C# - D# - F#"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/aflatminorscalepatterns.gif",
			formula: "Abm - Bbdim - Cb - Dbm - Ebm - Fb - Gb"
		});
	}

	render(){
		return(
			<div>
				<h2>G&#9839;/A&#9837; Minor</h2>				
				<button onClick={this.changeToPentGmSharp}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}