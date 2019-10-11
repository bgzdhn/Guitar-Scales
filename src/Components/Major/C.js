import React from 'react';
import ReactDOM from 'react-dom';

export class C extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/cmajorscalepatterns.gif",
			formula: "C - Dm - Em - F - G - Am - Bdim"
		};

		this.changeToPent = this.changeToPent.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPent(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/c-majorpentatonicpositions.gif",
			formula: "C - D - E - G - A"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/cmajorscalepatterns.gif",
			formula: "C - Dm - Em - F - G - Am - Bdim"
		});
	}

	render(){
		return(
			<div>
				<h2>C Major</h2>	
				<button onClick={this.changeToPent}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}