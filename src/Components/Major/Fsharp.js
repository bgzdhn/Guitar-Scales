import React from 'react';
import ReactDOM from 'react-dom';

export class Fsharp extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/fsharpmajorscalepatterns.gif",
			formula: "F# - G#m - A#m - B - C# - D#m - E#dim"
		};

		this.changeToPentFSharp = this.changeToPentFSharp.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentFSharp(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/fsharp-majorpentatonicpositions.gif",
			formula: "F# - G# - A# - C# - D#"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/fsharpmajorscalepatterns.gif",
			formula: "F# - G#m - A#m - B - C# - D#m - E#dim"
		});
	}

	render(){
		return(
			<div>
				<h2>F&#9839;/G&#9837; Major</h2>				
				<button onClick={this.changeToPentFSharp}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}