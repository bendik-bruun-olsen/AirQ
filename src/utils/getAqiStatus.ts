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
	{
		min: 0,
		max: 50,
		status: "Good",
		backgroundColor: "#009966",
		icon: faSmile,
	},
	{
		min: 51,
		max: 100,
		status: "Moderate",
		backgroundColor: "#FFDE33",
		icon: faMeh,
	},
	{
		min: 101,
		max: 150,
		status: "Unhealthy for Sensitive Groups",
		backgroundColor: "#FF9933",
		icon: faFrownOpen,
	},
	{
		min: 151,
		max: 200,
		status: "Unhealthy",
		backgroundColor: "#CC0033",
		icon: faFrown,
	},
	{
		min: 201,
		max: 300,
		status: "Very Unhealthy",
		backgroundColor: "#660099",
		icon: faGrimace,
	},
	{
		min: 301,
		max: Infinity,
		status: "Hazardous",
		backgroundColor: "#7E0023",
		icon: faDizzy,
	},
];

export default function getAqiStatus(aqi: number) {
	const result = AQI_DATA.find((range) => aqi >= range.min && aqi <= range.max);
	if (!result)
		return { status: "Unknown", backgroundColor: "blue", icon: faFrown };
	return result;
}
