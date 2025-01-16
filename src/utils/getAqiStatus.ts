import {
	faSmile,
	faMeh,
	faFrownOpen,
	faFrown,
	faGrimace,
	faDizzy,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface AQIRange {
	min: number;
	max: number;
	status: string;
	color: string;
	icon: IconProp;
}

const AQI_DATA: AQIRange[] = [
	{
		min: -1,
		max: -1,
		status: "Data Unavailable",
		color: "#9E9E9E",
		icon: faFrown,
	},
	{
		min: 0,
		max: 50,
		status: "Good",
		color: "#009966",
		icon: faSmile,
	},
	{
		min: 51,
		max: 100,
		status: "Moderate",
		color: "#FFDE33",
		icon: faMeh,
	},
	{
		min: 101,
		max: 150,
		status: "Unhealthy for Sensitive Groups",
		color: "#FF9933",
		icon: faFrownOpen,
	},
	{
		min: 151,
		max: 200,
		status: "Unhealthy",
		color: "#CC0033",
		icon: faFrown,
	},
	{
		min: 201,
		max: 300,
		status: "Very Unhealthy",
		color: "#660099",
		icon: faGrimace,
	},
	{
		min: 301,
		max: Infinity,
		status: "Hazardous",
		color: "#7E0023",
		icon: faDizzy,
	},
];

export default function getAqiStatus(aqi: number) {
	const result = AQI_DATA.find((range) => aqi >= range.min && aqi <= range.max);
	if (!result) return AQI_DATA[0];
	return result;
}
