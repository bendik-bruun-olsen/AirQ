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
import Summary from "../../components/Summary/Summary";

export default function DashboardPage() {
	const { selectedLocation } = useContext(LocationContext);
	const { data, isLoading, hasError } = useFetchData(selectedLocation.uid);
	const aqiStatus = getAqiStatus(data?.aqi ?? -1);

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
			<div className={styles.itemContainer}>
				<Summary aqiValue={data?.aqi ?? "No data"} aqiStatus={aqiStatus} />
			</div>

			<div className={styles.gaugeContainer}>
				<div className={styles.itemContainer}>
					<PMGauge value={data?.iaqi?.pm25?.v ?? 0} type={"pm25"} />
				</div>
				<div className={styles.itemContainer}>
					<PMGauge value={data?.iaqi?.pm10?.v ?? 0} type={"pm10"} />
				</div>
				<div className={styles.itemContainer}>
					{data?.iaqi?.h && data?.iaqi?.h?.v !== 0 && (
						<HumidityChart value={data.iaqi.h.v} />
					)}
				</div>
			</div>
			<div className={styles.itemContainer}>
				{data?.forecast && <ForeCastGraph forecast={data.forecast} />}
			</div>
		</>
	);
}
