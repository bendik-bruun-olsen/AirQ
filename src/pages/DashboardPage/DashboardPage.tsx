import { LocationContext } from "../../context/ContextProvider";
import { useContext } from "react";
import { capitalizeWords } from "../../utils/helpers";
import styles from "./DashboardPage.module.css";
import getAqiStatus from "../../utils/getAqiStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetchData from "../../hooks/useFetchData";
import LoadingPage from "../LoadingPage/LoadingPage";

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
			{hasError && <h3>An error occurred.</h3>}
			<div className={styles.summaryContainer} style={{ backgroundColor }}>
				<h2>Air Quality: {data?.aqi}</h2>
				<p>Status: {status}</p>
				<FontAwesomeIcon
					icon={icon}
					style={{ width: "50px", height: "50px" }}
				/>
			</div>
		</>
	);
}
