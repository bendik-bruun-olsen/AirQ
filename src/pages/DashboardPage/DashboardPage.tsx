import { LocationContext } from "../../context/ContextProvider";
import { useContext } from "react";
// import { capitalizeWords } from "../../utils/helpers";
import styles from "./DashboardPage.module.css";
import useFetchData from "../../hooks/useFetchData";
import LoadingPage from "../LoadingPage/LoadingPage";
import PMGauge from "../../components/PMGauge/PMGauge";
import ForeCastGraph from "../../components/ForecastGraph/ForecastGraph";
import HumidityChart from "../../components/HumidityChart/PieChart";
import Summary from "../../components/Summary/Summary";

export default function DashboardPage() {
	const { selectedLocation } = useContext(LocationContext);
	const { data, isLoading } = useFetchData(selectedLocation.uid);

	if (isLoading || data === null) return <LoadingPage />;
	return (
		<>
			<h1>Dashboard</h1>
			<div className="divider" />
			<div className={styles.wrapper}>
				{/* <div className={styles.itemContainer}>
					<h2>Location: {capitalizeWords(selectedLocation.name)}</h2>
					<h3>
						Current temp: {data?.iaqi?.t?.v ?? "Unknown"}
						{data?.iaqi?.t?.v && "℃"}
					</h3>
				</div> */}
				<div className={styles.itemContainer}>
					<Summary data={data} />
				</div>
			</div>

			<div className={styles.wrapper}>
				{data?.iaqi?.pm25?.v && (
					<div className={styles.itemContainer}>
						<PMGauge value={data.iaqi.pm25.v} type={"pm25"} />
					</div>
				)}
				{data?.iaqi?.pm10?.v && (
					<div className={styles.itemContainer}>
						<PMGauge value={data.iaqi.pm10.v} type={"pm10"} />
					</div>
				)}
				{data?.iaqi?.h && data?.iaqi?.h?.v !== 0 && (
					<div className={styles.itemContainer}>
						<HumidityChart value={data.iaqi.h.v} />
					</div>
				)}
			</div>
			{data?.forecast && (
				<div className={styles.itemContainer}>
					<ForeCastGraph forecast={data.forecast} />
				</div>
			)}
		</>
	);
}
