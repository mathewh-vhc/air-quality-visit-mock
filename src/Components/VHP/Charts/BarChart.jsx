import React, { Component } from 'react';

/**
 * A component which creates a horizontal bar chart with a single set of data. Currently support tick numbers with 5 or 6 ticks.
 * @param {Array} data | an array containing the scores of each bar, normalized to x/100.
 * @param {Array} labels | an optional array containing the labels of each bar
 * @param {Array} ticks | an optional array containing the tick numbers used for the bar. The last tick number will be hidden from view.
 */
export class BarChart extends Component {
    constructor(props) {
        super(props)

		this.DrawBars = this.DrawBars.bind(this)
		this.DrawTicks = this.DrawTicks.bind(this)
		this.DrawTickNumbers = this.DrawTickNumbers.bind(this)
    }

	/**
	 * Creates the bars within the graph
	 * @returns a div containing the bars
	 */
	DrawBars() {
		let retval = []

		for (let i = 0; i < this.props.data.length; i++) {
			retval.push(
				<div className='bar-chart-bar-outer'>
					<div className={'bar-chart-bar-label ' + this.props.labelType}>{this.props.labels&&this.props.labels[i]}</div>
					<div className='bar-chart-bar' style={{width:this.props.data[i] + "%"}}></div>
				</div>
			)
		}

		return <div className='bar-chart-bars-cont'>
			{retval}
		</div>
	}

	/**
	 * Creates the tick lines within the graph.
	 * @returns a div containing the ticks
	 */
	DrawTicks() {
		let retval = []
		
		for (let i = 0; i < this.props.ticks.length; i++) {
			retval.push(
				<div className={'bar-chart-tick ' + (i + 1) + "/" + this.props.ticks.length}></div>
			)
		}

		return <div className={'bar-chart-tick-cont ' + "chart-" + this.props.ticks.length}>
			{retval}
		</div>
	}

	/**
	 * Creates the tick numbers that sit below the graph.
	 * @returns a div containing the ticks
	 */
	DrawTickNumbers() {
		let retval = []
		
		for (let i = 0; i < this.props.ticks.length; i++) {
			retval.push(
				<div className={'bar-chart-tick-number ' + i + "/" + this.props.ticks.length}>{this.props.ticks[i]}</div>
			)
		}

		return <div className={'bar-chart-tick-numbers-cont ' + "chart-" + this.props.ticks.length}>
			{retval}
		</div>
	}

    render() {
        return(
            <div className='bar-chart-container'>
				<div className='bar-chart'>
					{this.props.ticks&&this.DrawTicks()}
					{this.DrawBars()}
				</div>
				{this.props.ticks&&this.DrawTickNumbers()}
            </div>
        );
    }
}