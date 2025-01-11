import { APIResponse } from "../../interfaces/APIResponse";
import { LocationContext } from "../../context/ContextProvider";
import { useContext, useEffect, useState } from "react";
import { capitalizeWords } from "../../utils/helpers";
import styles from "./DashboardPage.module.css";
import getAqiStatus from "../../utils/getAqiStatus";
import { initialData } from "../../constants/initialData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDizzy } from "@fortawesome/free-solid-svg-icons";

export default function DashboardPage() {
	const { selectedLocation } = useContext(LocationContext);
	const apiUrl = "http://api.waqi.info/feed/";
	const apiToken = import.meta.env.VITE_API_TOKEN;
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<APIResponse["data"]>(initialData);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${apiUrl}${selectedLocation.name}/?token=${apiToken}`
				);
				const result = await response.json();
				if (result.status !== "ok") throw new Error();
				console.log("data fetched: ", result.data);
				setData(result.data);
			} catch {
				setError(
					"Unable to retrieve data for selected location. Please choose another. "
				);
			}
		};
		fetchData();
	}, [selectedLocation, apiToken]);

	const { status, backgroundColor, icon } = getAqiStatus(data.aqi);

	return (
		<>
			<h1>Dashboard</h1>
			<hr />
			<h2>You've selected: {capitalizeWords(selectedLocation.name)}</h2>
			{error && <h3>{error}</h3>}
			<div className={styles.summaryContainer} style={{ backgroundColor }}>
				<h2>Air Quality: {data.aqi}</h2>
				<p>Status: {status}</p>
				<FontAwesomeIcon
					icon={icon}
					style={{ width: "50px", height: "50px" }}
				/>
			</div>
		</>
	);
}
