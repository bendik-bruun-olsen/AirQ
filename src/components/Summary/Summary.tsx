import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./Summary.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
	aqiValue: number | string;
	aqiStatus: {
		status: string;
		color: string;
		icon: IconProp;
	};
}

export default function Summary(aqi: Props) {
	const { status, color, icon } = aqi.aqiStatus;
	console.log("aqi received: ", aqi.aqiValue);

	return (
		<div className={styles.container}>
			<h2>Overall Air Quality (AQI): {aqi.aqiValue}</h2>
			<p>Status: {status}</p>
			<FontAwesomeIcon
				icon={icon}
				style={{
					width: "50px",
					height: "50px",
					color,
				}}
			/>
		</div>
	);
}
