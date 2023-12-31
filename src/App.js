import { AirQualityMock } from './AirQualityMock';
import './App.css';

import {AppBox} from './Components/VHP/Admin/AppBoxRestruct';


/**
 * All you give the AppBox is a basic set of settings - everything else (quick actions, etc) should only
 * be customized by your application itself. The AppBox works just as a basic container with a UserForm & login included
 */
var configdefault = {
	tb:{
		active:true
	},
	user:{
		active:true
	},
	dock:{
		active:false
	},
	settings:{
		dev:true
	}
}

function App() {
  	return (
		<div className = "App">
	  		<AppBox config={configdefault}>
				<AirQualityMock></AirQualityMock>
			</AppBox>
		</div>
  	);
}

export default App;
