import { LocationContext } from "../../context/ContextProvider";
import { useContext } from "react";
import { capitalizeWords } from "../../utils/helpers";
import styles from "./DashboardPage.module.css";
import getAqiStatus from "../../utils/getAqiStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetchData from "../../hooks/useFetchData";
import LoadingPage from "../LoadingPage/LoadingPage";
import PMGauge from "../../components/PMGauge/PMGauge";
import ForeCastGraph from "../../components/ForecastGraph/ForecastGraph";
import HumidityChart from "../../components/HumidityChart/PieChart";

export default function DashboardPage() {
	const { selectedLocation } = useContext(LocationContext);
	const { data, isLoading, hasError } = useFetchData(selectedLocation.uid);
	const { status, backgroundColor, icon } = getAqiStatus(data?.aqi ?? 0);

	if (isLoading) return <LoadingPage />;
	return (
		<>
			<h1>Dashboard</h1>
			<hr />
			<h2>You've selected: {capitalizeWords(selectedLocation.name)}</h2>
			<h4>
				Current temp: {data?.iaqi?.t?.v ?? "Unknown"}
				{data?.iaqi?.t?.v && "℃"}
			</h4>
			{hasError && <h3>An error occurred.</h3>}
			<div className={styles.summaryContainer} style={{ backgroundColor }}>
				<h2>Overall Air Quality (AQI): {data?.aqi}</h2>
				<p>Status: {status}</p>
				<FontAwesomeIcon
					icon={icon}
					style={{ width: "50px", height: "50px" }}
				/>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.itemContainer}>
					<PMGauge value={data?.iaqi?.pm25?.v ?? 0} type={"pm25"} />
				</div>
				<div className={styles.itemContainer}>
					<PMGauge value={data?.iaqi?.pm10?.v ?? 0} type={"pm10"} />
				</div>
			</div>
			<div className={styles.itemContainer}>
				{data?.forecast && <ForeCastGraph forecast={data.forecast} />}
			</div>
			<div className={styles.itemContainer}>
				{data?.iaqi?.h && data?.iaqi?.h?.v !== 0 && (
					<HumidityChart value={data.iaqi.h.v} />
				)}
			</div>
		</>
	);
}
