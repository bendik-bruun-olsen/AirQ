import { LocationContext } from "../../context/ContextProvider";
import { useContext } from "react";
import styles from "./DashboardPage.module.css";
import useFetchData from "../../hooks/useFetchData";
import LoadingPage from "../LoadingPage/LoadingPage";
import PMGauge from "../../components/PMGauge/PMGauge";
import ForeCastGraph from "../../components/ForecastGraph/ForecastGraph";
import HumidityChart from "../../components/HumidityChart/PieChart";
import LocationSummary from "../../components/LocationSummary/LocationSummary";
import AirQualitySummary from "../../components/AirQualitySummary/AirQualitySummary";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
	const { selectedLocation } = useContext(LocationContext);
	const { data, isLoading } = useFetchData(selectedLocation.uid);
	const navigate = useNavigate();

	const handleChange = () => {
		navigate("/map");
	};

	if (isLoading || data === null) return <LoadingPage />;
	return (
		<>
			<div className={styles.headerContainer}>
				<h1>Dashboard</h1>
				<Button
					variant="text"
					onClick={handleChange}
					sx={{ color: "var(--sky-blue)" }}
				>
					Change location
				</Button>
			</div>
			<div className="divider" />
			<div className={styles.wrapper}>
				<div className={styles.itemContainer}>
					<LocationSummary data={data} />
				</div>
				<div className={styles.itemContainer}>
					<AirQualitySummary aqiValue={data.aqi} />
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
