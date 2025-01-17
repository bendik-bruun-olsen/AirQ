import styles from "./Summary.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { APIResponse } from "../../interfaces/APIResponse";
import getAqiStatus from "../../utils/getAqiStatus";

interface Props {
	data: APIResponse["data"];
}

export default function Summary({ data }: Props) {
	const aqiStatus = getAqiStatus(data.aqi ?? -1);
	const { status, color, icon } = aqiStatus;

	const findTimeSinceUpdate = (date: string) => {
		const diff = new Date().getTime() - new Date(date).getTime();
		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hours = Math.floor(diff / (1000 * 60 * 60));
		const minutes = Math.floor(diff / (1000 * 60));

		if (days > 0) {
			return `${days} ${days > 1 ? "days ago" : "day ago"}`;
		}
		if (hours > 0) {
			return `${hours} ${hours > 1 ? "hours ago" : "hour ago"}`;
		}
		if (minutes > 0) {
			return `${minutes} ${minutes > 1 ? "minutes ago" : "minute ago"}`;
		}
		return "just now";
	};

	console.log("DateSent: ", findTimeSinceUpdate(data.time.iso));

	return (
		<div className={styles.wrapper}>
			<h2>{data.city.name}</h2>
			<span className={styles.aqiValue}>
				Updated {findTimeSinceUpdate(data.time.iso)}
			</span>
			<div className={styles.textContainer}>
				<h3>Overall Air Quality:</h3>
				<span className={styles.aqiValue}>{status}</span>
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
