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

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.textContainer}>
					<h2>Overall Air Quality:</h2>
					<span className={styles.aqiValue}>{status}</span>
				</div>
				<div className={styles.textContainer}>
					<h3>Value:</h3>
					<span className={styles.aqiValue}>{aqi.aqiValue}</span>
				</div>
			</div>
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
