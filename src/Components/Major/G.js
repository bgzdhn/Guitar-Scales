import React from 'react';
import ReactDOM from 'react-dom';

export class G extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/gmajorscalepatterns.gif",
			formula: "G - Am - Bm - C - D - Em - F#dim"
		};

		this.changeToPentG = this.changeToPentG.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentG(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/g-majorpentatonicpositions.gif",
			formula: "G - A - B - D - E"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/gmajorscalepatterns.gif",
			formula: "G - Am - Bm - C - D - Em - F#dim"
		});
	}
	
	render(){
		return(
			<div>
				<h2>G Major</h2>
				<button onClick={this.changeToPentG}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}