export interface PMRangeInterface {
	name: string;
	value: number;
	color: string;
}

const PM25Ranges = [
	{ name: "Good", value: 15.4 - 0, color: "#00e400" },
	{ name: "Moderate", value: 40.4 - 15.5, color: "#ffff00" },
	{
		name: "Unhealthy for Sensitive Groups",
		value: 65.4 - 40.5,
		color: "#ff7e00",
	},
	{ name: "Unhealthy", value: 150.4 - 65.5, color: "#ff0000" },
	{ name: "Very Unhealthy", value: 250.4 - 150.5, color: "#8f3f97" },
	{ name: "Hazardous", value: 500.4 - 250.5, color: "#7e0023" },
];
const PM10Ranges = [
	{ name: "Good", value: 54 - 0, color: "#00e400" },
	{ name: "Moderate", value: 154 - 55, color: "#ffff00" },
	{
		name: "Unhealthy for Sensitive Groups",
		value: 254 - 155,
		color: "#ff7e00",
	},
	{ name: "Unhealthy", value: 354 - 255, color: "#ff0000" },
	{ name: "Very Unhealthy", value: 424 - 355, color: "#8f3f97" },
	{ name: "Hazardous", value: 604 - 425, color: "#7e0023" },
];

export { PM10Ranges, PM25Ranges };
