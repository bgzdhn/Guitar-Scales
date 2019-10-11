import React from 'react';
import ReactDOM from 'react-dom';

export class Fmsharp extends  React.Component{	
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/fsharpminorscalepatterns.gif",
			formula: "F#m - G#dim - A - Bm - C#m - D - E"
		};

		this.changeToPentFmSharp = this.changeToPentFmSharp.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentFmSharp(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/fsharp-minorpentatonicpositions.gif",
			formula: "F# - A - B - C# - E"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/fsharpminorscalepatterns.gif",
			formula: "F#m - G#dim - A - Bm - C#m - D - E"
		});
	}
	
	render(){
		return(
			<div>
				<h2>F&#9839;/G&#9837; Minor</h2>				
				<button onClick={this.changeToPentFmSharp}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}