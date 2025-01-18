import styles from "./LocationSummary.module.css";
import { APIResponse } from "../../interfaces/APIResponse";

interface Props {
	data: APIResponse["data"];
}

export default function LocationSummary({ data }: Props) {
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

	return (
		<div className={styles.wrapper}>
			<h2>{data.city.name}</h2>
			<div className={styles.textWrapper}>
				<span className={styles.value}>
					Updated {findTimeSinceUpdate(data.time.iso)}
				</span>
				{data?.iaqi?.t?.v && (
					<div className={styles.textContainer}>
						<h3>Temperature:</h3>
						<span className={styles.value}>{data.iaqi.t.v}℃</span>
					</div>
				)}
			</div>
		</div>
	);
}
