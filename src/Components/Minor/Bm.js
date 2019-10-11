import React from 'react';
import ReactDOM from 'react-dom';

export class Bm extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/bminorscalepatterns.gif",
			formula: "Bm - C#dim - D - Em - F#m - G - A"
		};

		this.changeToPentBm = this.changeToPentBm.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentBm(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/b-minorpentatonicpositions.gif",
			formula: "B - D - E - F# - A"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/bminorscalepatterns.gif",
			formula: "Bm - C#dim - D - Em - F#m - G - A"
		});
	}
	
	render(){
		return(
			<div>
				<h2>B Minor</h2>				
				<button onClick={this.changeToPentBm}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}