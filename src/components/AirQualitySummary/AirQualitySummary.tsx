import getAqiStatus from "../../utils/getAqiStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AirQualitySummary.module.css";

interface Props {
	aqiValue: number;
}

export default function AirQualitySummary({ aqiValue }: Props) {
	const { status, color, icon } = getAqiStatus(aqiValue ?? -1);

	return (
		<div className={styles.wrapper}>
			<div className={styles.textWrapper}>
				<div className={styles.textContainer}>
					<h3>Overall Air Quality:</h3>
					<span className={styles.aqiValue}>{status}</span>
				</div>
				<div className={styles.textContainer}>
					<h3>AQI Value:</h3>
					<span className={styles.aqiValue}>{aqiValue}</span>
				</div>
			</div>
			<div className={styles.iconContainer}>
				<FontAwesomeIcon
					icon={icon}
					style={{
						width: "50px",
						height: "50px",
						color,
					}}
				/>
			</div>
		</div>
	);
}
