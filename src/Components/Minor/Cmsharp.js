import React from 'react';
import ReactDOM from 'react-dom';

export class Cmsharp extends  React.Component{	
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/csharpminorscalepatterns.gif",
			formula: "C#m - D#dim - E - F#m - G#m - A - B"
		};

		this.changeToPentCmSharp = this.changeToPentCmSharp.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentCmSharp(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/csharp-minorpentatonicpositions.gif",
			formula: "C# - E - F# - G# - B"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/csharpminorscalepatterns.gif",
			formula: "C#m - D#dim - E - F#m - G#m - A - Bs"
		});
	}
	
	render(){
		return(
			<div>
				<h2>C&#9839;/D&#9837; Minor</h2>				
				<button onClick={this.changeToPentCmSharp}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}