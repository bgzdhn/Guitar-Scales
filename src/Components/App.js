import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';

import {C} from './Major/C';
import {Csharp} from './Major/Csharp';
import {D} from './Major/D';
import {Dsharp} from './Major/Dsharp';
import {E} from './Major/E';
import {F} from './Major/F';
import {Fsharp} from './Major/Fsharp';
import {G} from './Major/G';
import {Gsharp} from './Major/Gsharp';
import {A} from './Major/A';
import {Asharp} from './Major/Asharp';
import {B} from './Major/B';

import {Cm} from './Minor/Cm';
import {Cmsharp} from './Minor/Cmsharp';
import {Dm} from './Minor/Dm';
import {Dmsharp} from './Minor/Dmsharp';
import {Em} from './Minor/Em';
import {Fm} from './Minor/Fm';
import {Fmsharp} from './Minor/Fmsharp';
import {Gm} from './Minor/Gm';
import {Gmsharp} from './Minor/Gmsharp';
import {Am} from './Minor/Am';
import {Amsharp} from './Minor/Amsharp';
import {Bm} from './Minor/Bm';

export class App extends  React.Component{
	render() {
		return (
			<div>
				<div className="btn-group col-12" role="group" aria-label="Basic example">
					<Link to="/" className="btn btn-primary button">C Major</Link>
					<Link to="/Csharp" className="btn btn-primary button">C&#9839;/D&#9837; Major</Link>	
					<Link to="/D" className="btn btn-primary">D Major</Link>
					<Link to="/Dsharp" className="btn btn-primary button">D&#9839;/E&#9837; Major</Link>	
					<Link to="/E" className="btn btn-primary">E Major</Link>		
					<Link to="/F" className="btn btn-primary">F Major</Link>
					<Link to="/Fsharp" className="btn btn-primary button">F&#9839;/G&#9837; Major</Link>					
					<Link to="/G" className="btn btn-primary">G Major</Link>	
					<Link to="/Gsharp" className="btn btn-primary button">G&#9839;/A&#9837; Major</Link>
					<Link to="/A" className="btn btn-primary">A Major</Link>
					<Link to="/Asharp" className="btn btn-primary button">A&#9839;/B&#9837; Major</Link>
					<Link to="/B" className="btn btn-primary">B Major</Link>		
				</div>
				<div><br></br></div>
				<div className="btn-group col-12" role="group" aria-label="Basic example">
					<Link to="/Am" className="btn btn-secondary button">A Minor</Link>
					<Link to="/Amsharp" className="btn btn-secondary button">A&#9839;/B&#9837; Minor</Link>
					<Link to="/Bm" className="btn btn-secondary button">B Minor</Link>
					<Link to="/Cm" className="btn btn-secondary button">C Minor</Link>
					<Link to="/Cmsharp" className="btn btn-secondary button">C&#9839;/D&#9837; Minor</Link>
					<Link to="/Dm" className="btn btn-secondary button">D Minor</Link>
					<Link to="/Dmsharp" className="btn btn-secondary button">D&#9839;/E&#9837; Minor</Link>
					<Link to="/Em" className="btn btn-secondary button">E Minor</Link>		
					<Link to="/Fm" className="btn btn-secondary button">F Minor</Link>
					<Link to="/Fmsharp" className="btn btn-secondary button">F&#9839;/G&#9837; Minor</Link>
					<Link to="/Gm" className="btn btn-secondary button">G Minor</Link>
					<Link to="/Gmsharp" className="btn btn-secondary button">G&#9839;/A&#9837; Minor</Link>			
				</div>
				<br></br>
				<div className="col-9">			
					<Route exact={true} path="/" component={C}/>
					<Route path="/Csharp" component={Csharp}/>
					<Route path="/D" component={D}/>
					<Route path="/Dsharp" component={Dsharp}/>
					<Route path="/E" component={E}/>
					<Route path="/F" component={F}/>
					<Route path="/Fsharp" component={Fsharp}/>
					<Route path="/G" component={G}/>
					<Route path="/Gsharp" component={Gsharp}/>
					<Route path="/A" component={A}/>
					<Route path="/Asharp" component={Asharp}/>
					<Route path="/B" component={B}/>
							
					<Route path="/Cm" component={Cm}/>
					<Route path="/Cmsharp" component={Cmsharp}/>
					<Route path="/Dm" component={Dm}/>
					<Route path="/Dmsharp" component={Dmsharp}/>
					<Route path="/Em" component={Em}/>
					<Route path="/Fm" component={Fm}/>
					<Route path="/Fmsharp" component={Fmsharp}/>
					<Route path="/Gm" component={Gm}/>
					<Route path="/Gmsharp" component={Gmsharp}/>
					<Route path="/Am" component={Am}/>
					<Route path="/Amsharp" component={Amsharp}/>
					<Route path="/Bm" component={Bm}/>
				</div>
			</div>
		)
	}
}