import React, { Component } from 'react';

/**
 * A component which creates a legend for a chart.
 * @param {Array} data | object containing the legend data
 */
export class ChartLegend extends Component {
    constructor(props) {
        super(props)

		this.MapLegend = this.MapLegend.bind(this)
    }

	/**
	 * Maps a legend from the data in props
	 */
    MapLegend() {
		let retval = []

		for (let i = 0; i < this.props.data.length; i++) {
			retval.push(
				<div className='legend-item'>
					<div className='legend-color' id = {this.props.data[i].replaceAll(' ', '').toLowerCase()}></div>
					<div className='legend-text'>{this.props.data[i]}</div>
				</div>
			)
		}

		return retval
	}

    render() {
        return(
            <div className='chart-legend'>
                {this.MapLegend()}
            </div>
        );
    }
}