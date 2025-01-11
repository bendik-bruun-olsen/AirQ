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
	backgroundColor: string;
	icon: IconProp;
}

const AQI_DATA: AQIRange[] = [
	{ min: 0, max: 50, status: "Good", backgroundColor: "green", icon: faSmile },
	{
		min: 51,
		max: 100,
		status: "Moderate",
		backgroundColor: "yellow",
		icon: faMeh,
	},
	{
		min: 101,
		max: 150,
		status: "Unhealthy for Sensitive Groups",
		backgroundColor: "orange",
		icon: faFrownOpen,
	},
	{
		min: 151,
		max: 200,
		status: "Unhealthy",
		backgroundColor: "red",
		icon: faFrown,
	},
	{
		min: 201,
		max: 300,
		status: "Very Unhealthy",
		backgroundColor: "purple",
		icon: faGrimace,
	},
	{
		min: 301,
		max: Infinity,
		status: "Hazardous",
		backgroundColor: "maroon",
		icon: faDizzy,
	},
];

export default function getAqiStatus(aqi: number) {
	const result = AQI_DATA.find((range) => aqi >= range.min && aqi <= range.max);
	if (!result)
		return { status: "Unknown", backgroundColor: "blue", icon: faFrown };
	return result;
}
