import React from 'react';
import ReactDOM from 'react-dom';

export class D extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/dmajorscalepatterns.gif",
			formula: "D - Em - F#m - G - A - Bm - C#dim"
		};

		this.changeToPentD = this.changeToPentD.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentD(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/d-majorpentatonicpositions.gif",
			formula: "D - E - F# - A - B"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/dmajorscalepatterns.gif",
			formula: "D - Em - F#m - G - A - Bm - C#dim"
		});
	}
	
	render(){
		return(
			<div>
				<h2>D Major</h2>				
				<button onClick={this.changeToPentD}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}