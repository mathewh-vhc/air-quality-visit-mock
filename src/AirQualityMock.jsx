import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { BasicHeader, CardContent, Card, Image, InputForm } from 'vhp-component-library';
import { ChartLegend } from './Components/VHP/Charts/ChartLegend';
import { AirHealthData, AirSafetyData, TemperatureAirMovementData, labels, legend, scores, ticks } from './bin/data';
import { BarChart } from './Components/VHP/Charts/BarChart';

/**
 * @todo | Component for the score titles/grades in the forms
 * @todo | Component for the score grade
 * @todo | Dynamicize descriptions/titles/etc
 * @todo | Add a click event/popup card to the charts - in chart component, add a click function
 */
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
								<Image src = "https://raw.githubusercontent.com/mathewh-vhc/air-quality-visit-mock/gh-pages/gauge.png" id = "guage-chart"/>
								<ChartLegend data = {legend} />
							</div>
						</CardContent>
						<Card cardClass = "outline-card" id = "bar-card">
							<BarChart 
								data = {scores}
								ticks = {ticks}
								labels = {labels}
								classes = {["excellent", "average", "good"]}
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
						<div className='score-summary-grade excellent'>
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
						<div className='score-summary-grade average'>
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
						<div className='score-summary-grade good'>
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