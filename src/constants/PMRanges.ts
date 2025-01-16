export interface PMRangeInterface {
	name: string;
	minValue: number;
	maxValue: number;
	color: string;
}

const PM25Ranges = [
	{
		name: "Good",
		minValue: 0,
		maxValue: 15.4,
		color: "var(--good-green",
		value: 1,
	},
	{
		name: "Moderate",
		minValue: 15.5,
		maxValue: 40.4,
		color: "var(--moderate-yellow)",
		value: 1,
	},
	{
		name: "Unhealthy for Sensitive Groups",
		minValue: 40.5,
		maxValue: 65.4,
		color: "var(--sensitive-orange)",
		value: 1,
	},
	{
		name: "Unhealthy",
		minValue: 65.5,
		maxValue: 150.4,
		color: "var(--unhealthy-red)",
		value: 1,
	},
	{
		name: "Very Unhealthy",
		minValue: 150.5,
		maxValue: 250.4,
		color: "var(--very-unhealthy-purple)",
		value: 1,
	},
	{
		name: "Hazardous",
		minValue: 250.5,
		maxValue: 500.4,
		color: "var(--hazardous-maroon)",
		value: 1,
	},
];

const PM10Ranges = [
	{
		name: "Good",
		minValue: 0,
		maxValue: 54,
		color: "var(--good-green)",
		value: 1,
	},
	{
		name: "Moderate",
		minValue: 55,
		maxValue: 154,
		color: "var(--moderate-yellow)",
		value: 1,
	},
	{
		name: "Unhealthy for Sensitive Groups",
		minValue: 155,
		maxValue: 254,
		color: "var(--sensitive-orange)",
		value: 1,
	},
	{
		name: "Unhealthy",
		minValue: 255,
		maxValue: 354,
		color: "var(--unhealthy-red)",
		value: 1,
	},
	{
		name: "Very Unhealthy",
		minValue: 355,
		maxValue: 424,
		color: "var(--very-unhealthy-purple)",
		value: 1,
	},
	{
		name: "Hazardous",
		minValue: 425,
		maxValue: 604,
		color: "var(--hazardous-maroon)",
		value: 1,
	},
];
export { PM10Ranges, PM25Ranges };
