import React from 'react';
import ReactDOM from 'react-dom';

export class B extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/bmajorscalepatterns.gif",
			formula: "B - C#m - D#m - E - F# - G#m - A#dim"
		};

		this.changeToPentB = this.changeToPentB.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentB(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/b-majorpentatonicpositions.gif",
			formula: "B - C# - D# - F# - G#"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/bmajorscalepatterns.gif",
			formula: "B - C#m - D#m - E - F# - G#m - A#dim"
		});
	}
	
	render(){
		return(
			<div>
				<h2>B Major</h2>				
				<button onClick={this.changeToPentB}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}