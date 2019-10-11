import React from 'react';
import ReactDOM from 'react-dom';

export class Gsharp extends  React.Component{
	constructor(props){
		super(props);
	
		this.state = {
			scale: "https://www.guitar-chords.org.uk/scales-images/aflatmajorscalepatterns.gif",
			formula: "Ab - Bbm - Cm - Db; - Eb; - Fm - Gdim"
		};

		this.changeToPentGSharp = this.changeToPentGSharp.bind(this);
		this.changeToNat = this.changeToNat.bind(this);
	}

	changeToPentGSharp(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/gsharp-majorpentatonicpositions.gif",
			formula: "G# - A# - B# - D# - E#"
		});
	}

	changeToNat(){
		this.setState({
			scale: "https://www.guitar-chords.org.uk/scales-images/aflatmajorscalepatterns.gif",
			formula: "Ab - Bbm - Cm - Db; - Eb; - Fm - Gdim"
		});
	}

	render(){
		return(
			<div>
				<h2>G&#9839;/A&#9837; Major</h2>				
				<button onClick={this.changeToPentGSharp}>Pentatonic Scale</button>
				<button onClick={this.changeToNat}>Natural Scale</button>		
				<h2>{this.state.formula}</h2>
				<img src={this.state.scale}/>
			</div>
		);
	}
}