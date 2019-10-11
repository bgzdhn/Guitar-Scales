import React from 'react';
import ReactDOM from 'react-dom';

export class Em extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/eminorscalepatterns.gif",
			formula: "Em - F#dim - G - Am - Bm - C - D"
		};

		this.changeToPentEm = this.changeToPentEm.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentEm(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/e-minorpentatonicpositions.gif",
			formula: "E - G - A - B - D"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/eminorscalepatterns.gif",
			formula: "Em - F#dim - G - Am - Bm - C - D"
		});
	}
	
	render(){
		return(
			<div>
				<h2>E Minor</h2>			
				<button onClick={this.changeToPentEm}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}