interface AQIRange {
	min: number;
	max: number;
	status: string;
	backgroundColor: string;
}

const AQI_DATA: AQIRange[] = [
	{ min: 0, max: 50, status: "Good", backgroundColor: "green" },
	{ min: 51, max: 100, status: "Moderate", backgroundColor: "yellow" },
	{
		min: 101,
		max: 150,
		status: "Unhealthy for Sensitive Groups",
		backgroundColor: "orange",
	},
	{ min: 151, max: 200, status: "Unhealthy", backgroundColor: "red" },
	{ min: 201, max: 300, status: "Very Unhealthy", backgroundColor: "purple" },
	{ min: 301, max: Infinity, status: "Hazardous", backgroundColor: "maroon" },
];

export default function getAqiRange(aqi: number) {
	const result = AQI_DATA.find((range) => aqi >= range.min && aqi <= range.max);

	return result;
}
