import React from 'react';
import ReactDOM from 'react-dom';

export class A extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/amajorscalepatterns.gif",
			formula: "A - Bm - C#m - D - E - F#m - G#dim"
		};

		this.changeToPentA = this.changeToPentA.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentA(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/a-majorpentatonicpositions.gif",
			formula: "A - B - C# - E - F#"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/amajorscalepatterns.gif",
			formula: "A - Bm - C#m - D - E - F#m - G#dim"
		});
	}
	
	render(){
		return(
			<div>
				<h2>A Major</h2>				
				<button onClick={this.changeToPentA}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}