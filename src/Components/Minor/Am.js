import React from 'react';
import ReactDOM from 'react-dom';

export class Am extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/aminorscalepatterns.gif",
			formula: "Am - Bdim - C - Dm - Em - F - G"
		};

		this.changeToPentAm = this.changeToPentAm.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentAm(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/a-minorpentatonicpositions.gif",
			formula: "A - C - D - E - G"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/aminorscalepatterns.gif",
			formula: "Am - Bdim - C - Dm - Em - F - G"
		});
	}
	
	render(){
		return(
			<div>
				<h2>A Minor</h2>
				<button onClick={this.changeToPentAm}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}