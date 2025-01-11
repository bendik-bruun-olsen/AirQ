import { LocationContext } from "../../context/ContextProvider";
import { useContext } from "react";
import { capitalizeWords } from "../../utils/helpers";
import styles from "./DashboardPage.module.css";
import getAqiStatus from "../../utils/getAqiStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetchData from "../../hooks/useFetchData";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
	const navigate = useNavigate();
	const { selectedLocation } = useContext(LocationContext);
	const { data, isLoading, hasError } = useFetchData(selectedLocation);

	if (!data) navigate("/error");

	const { status, backgroundColor, icon } = getAqiStatus(data.aqi);

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
