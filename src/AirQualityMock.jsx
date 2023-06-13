import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { BasicHeader, CardContent, Card, Image, InputForm } from 'vhp-component-library';
import { ChartLegend } from './Components/VHP/Charts/ChartLegend';
import { AirHealthData, AirSafetyData, TemperatureAirMovementData, labels, legend, scores, ticks } from './bin/data';
import { BarChart } from './Components/VHP/Charts/BarChart';

export class AirQualityMock extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
			<>
            	<BasicHeader text = "System 1 Enhanced Air Quality Score" headerClass = "summary-title-header"/>
				<CardContent cardContentClass = "score-card-container">
					<Card
						titlebar = {true}
						title = "Summary"
						cardClass = "score-pres-card"
						id = "summary-card"
					>
						<CardContent cardContentClass="no-padding">
							<div className='score-text-cont'>
								<div className='score-text'>
									The Enhanced Air Quality of your system scored <span className='score-actual'>115</span> 
									<span> out of </span><span className='score-out-of'>165</span>.
								</div>
								<div className='score-grade'>
									Air Quality Grade: <span className='score-actual'>Good</span>
								</div>
							</div>
							<div className='guage-cont'>
								<Image src = "/gauge.png" id = "guage-chart"/>
								<ChartLegend data = {legend} />
							</div>
						</CardContent>
						<Card cardClass = "outline-card" id = "bar-card">
							<BarChart 
								data = {scores}
								ticks = {ticks}
								labels = {labels}
							/>
							<CardContent>
								<div className='grade-descr'>
									The overall quality of this home's air is <span>Good</span>.
									This combines the components of Temperature & Air Movement, Air Health,
									and Air Safety. There are areas that can be improved and you can discuss
									these with your technician or with our office.
								</div>
							</CardContent>
						</Card>
					</Card>
					<Card
						titlebar = {true}
						title = "Score Breakdown"
						cardClass = "score-pres-card"
						id = "breakdown-card"
					>
						<div className='score-summary-grade'>
							<div className='score-summary-grade-title'>
								Temperature & Air Movement
							</div>
							<div className='score-summary-grade-percent'>
								90%
							</div>
						</div>
						<div className='score-summary-form-cont'>
							<InputForm 
								formdata = {TemperatureAirMovementData}
							/>
						</div>
						<div className='score-summary-grade'>
							<div className='score-summary-grade-title'>
								Health
							</div>
							<div className='score-summary-grade-percent'>
								50%
							</div>
						</div>
						<div className='score-summary-form-cont'>
							<InputForm 
								formdata = {AirHealthData}
							/>
						</div>
						<div className='score-summary-grade'>
							<div className='score-summary-grade-title'>
								Safety
							</div>
							<div className='score-summary-grade-percent'>
								80%
							</div>
						</div>
						<div className='score-summary-form-cont'>
							<InputForm 
								formdata = {AirSafetyData}
							/>
						</div>
					</Card>
				</CardContent>
			</>
        );
    }
}