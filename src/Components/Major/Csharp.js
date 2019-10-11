import React from 'react';
import ReactDOM from 'react-dom';

export class Csharp extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/csharpmajorscalepatterns.gif",
			formula: "C# - D#m - E#m - F# - G# - Am - Bdim"
		};

		this.changeToPentCSharp = this.changeToPentCSharp.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentCSharp(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/csharp-majorpentatonicpositions.gif",
			formula: "C# - D# - E# - G# - A#"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/csharpmajorscalepatterns.gif",
			formula: "C# - D#m - E#m - F# - G# - Am - Bdim"
		});
	}

	render(){
		return(
			<div>
				<h2>C&#9839;/D&#9837; Major</h2>				
				<button onClick={this.changeToPentCSharp}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}