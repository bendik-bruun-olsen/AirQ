import { APIResponse } from "../../utils/interfaces";
import { LocationContext } from "../../context/ContextProvider";
import { useContext } from "react";
import { capitalizeWords } from "../../utils/helpers";

export default function DashboardPage() {
	const { selectedLocation } = useContext(LocationContext);
	// const prevSelectedCities: string[] = ["Stavanger"];
	const apiUrl = "http://api.waqi.info/feed/";
	const apiToken = import.meta.env.VITE_API_TOKEN;

	const fetchData = async () => {
		try {
			console.log("fetching");

			const response = await fetch(
				`${apiUrl}${selectedLocation}/?token=${apiToken}`
			);
			const data = await response.json();
			if (data.status !== "ok") throw new Error();
			return data.data as APIResponse["data"];
		} catch {
			// setError("An unexpected error occurred. Please try again later.");
		}
	};

	(async () => {
		console.log("calling");
		const data = await fetchData();
		console.log(data);
	})();

	return (
		<>
			<h1>Dashboard</h1>
			<hr />
			<h2>You've selected: {capitalizeWords(selectedLocation)}</h2>
		</>
	);
}
