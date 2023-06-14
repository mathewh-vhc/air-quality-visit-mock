export var legend = [
	"Excellent",
	"Minor Improvements Available",
	"Improvements Available",
	"Several Improvements Recommended",
	"Address Concerns Soon"
]

export var scores = [
	90,
	50,
	80
]

export var labels = [
	"Temperature & Air Movement: 90%",
	"Air Health: 50%",
	"Air Safety: 80%"
]

export var ticks = [
	0,
	25,
	50,
	75,
	100
]

export var ticks2 = [
	0,
	20,
	40,
	60,
	80,
	100
]

export var TemperatureAirMovementData = [
	{
		title:"Fan Type",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"Variable Speed"
			},
			{
				value:"15/15"
			}
		]
	},
	{
		title:"Client Reported Areas that are Drafty/Cold in winter?",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"No"
			},
			{
				value:"10/10"
			}
		]
	},
	{
		title:"Gas Valve Heating Style Type",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"Straight Line"
			},
			{
				value:"15/15"
			}
		]
	},
	{
		title:"Air Flow",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"?"
			},
			{
				value:"5/10"
			}
		]
	},
	{
		title:"Controls Type Communicate",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"?"
			},
			{
				value:"10/10"
			}
		]
	},
	{
		title:"Static Pressure",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"?"
			},
			{
				value:"5/10"
			}
		]
	},
	{
		title:"Humidifier",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"?"
			},
			{
				value:"10/10"
			}
		]
	}
]

export var AirHealthData = [
	{
		title:"Humidifier Present",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"Yes"
			},
			{
				value:"10/10"
			}
		]
	},
	{
		title:"ERV or Fresh Air",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"?"
			},
			{
				value:"0/5"
			}
		]
	},
	{
		title:"Filter Type",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:'1"'
			},
			{
				value:"0/10"
			}
		]
	},
	{
		title:"Coil Cleanliness",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:'NA'
			},
			{
				value:""
			}
		]
	},
	{
		title:"UV Light Present",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"No"
			},
			{
				value:"0/10"
			}
		]
	},
	{
		title:"Digital Humidistat",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"Yes"
			},
			{
				value:"5/5"
			}
		]
	},
	{
		title:"Carbon Dioxide Monitor",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"No"
			},
			{
				value:"0/5"
			}
		]
	},
	{
		title:"Humidifier Maintained",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"?"
			},
			{
				value:"5/5"
			}
		]
	}
]

export var AirSafetyData = [
	{
		title:"Carbon Monoxide Detection",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"Low Level"
			},
			{
				value:"10/10"
			}
		]
	},
	{
		title:"Smoke Detector Over 10 Years Old",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"?"
			},
			{
				value:"?/10"
			}
		]
	},
	{
		title:"Heat Exchanger Test",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:"Passed"
			},
			{
				value:"15/15"
			}
		]
	}
]

/**
 	{
		title:"",
		inputType:"MultiFormItem",
		formItemClass:"score-form-item",
		items:[
			{
				value:""
			},
			{
				value:""
			}
		]
	}
 */