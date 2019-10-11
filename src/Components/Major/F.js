import React from 'react';
import ReactDOM from 'react-dom';

export class F extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/fmajorscalepatterns.gif",
			formula: "F - Gm - Am - Bb - C - Dm - Edim"
		};

		this.changeToPentF = this.changeToPentF.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentF(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/f-majorpentatonicpositions.gif",
			formula: "F - G - A - C - D"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/fmajorscalepatterns.gif",
			formula: "F - Gm - Am - Bb - C - Dm - Edim"
		});
	}
	
	render(){
		return(
			<div>
				<h2>F Major</h2>				
				<button onClick={this.changeToPentF}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}