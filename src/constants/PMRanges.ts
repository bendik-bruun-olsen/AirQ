export interface PMRangeInterface {
	name: string;
	minValue: number;
	maxValue: number;
	color: string;
}

const PM25Ranges = [
	{ name: "Good", minValue: 0, maxValue: 15.4, color: "#00e400", value: 15.4 },
	{
		name: "Moderate",
		minValue: 15.5,
		maxValue: 40.4,
		color: "#ffff00",
		value: 24.9,
	},
	{
		name: "Unhealthy for Sensitive Groups",
		minValue: 40.5,
		maxValue: 65.4,
		color: "#ff7e00",
		value: 24.9,
	},
	{
		name: "Unhealthy",
		minValue: 65.5,
		maxValue: 150.4,
		color: "#ff0000",
		value: 84.9,
	},
	{
		name: "Very Unhealthy",
		minValue: 150.5,
		maxValue: 250.4,
		color: "#8f3f97",
		value: 99.9,
	},
	{
		name: "Hazardous",
		minValue: 250.5,
		maxValue: 500.4,
		color: "#7e0023",
		value: 249.9,
	},
];

const PM10Ranges = [
	{ name: "Good", minValue: 0, maxValue: 54, color: "#00e400", value: 54 },
	{
		name: "Moderate",
		minValue: 55,
		maxValue: 154,
		color: "#ffff00",
		value: 99,
	},
	{
		name: "Unhealthy for Sensitive Groups",
		minValue: 155,
		maxValue: 254,
		color: "#ff7e00",
		value: 99,
	},
	{
		name: "Unhealthy",
		minValue: 255,
		maxValue: 354,
		color: "#ff0000",
		value: 99,
	},
	{
		name: "Very Unhealthy",
		minValue: 355,
		maxValue: 424,
		color: "#8f3f97",
		value: 69,
	},
	{
		name: "Hazardous",
		minValue: 425,
		maxValue: 604,
		color: "#7e0023",
		value: 179,
	},
];
export { PM10Ranges, PM25Ranges };
