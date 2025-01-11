import { useEffect, useState } from "react";
import { APIResponse } from "../interfaces/APIResponse";

const apiUrl = "http://api.waqi.info/feed/";
const apiToken = import.meta.env.VITE_API_TOKEN;

export default function useFetchData(location: string) {
	const [data, setData] = useState<APIResponse["data"] | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [hasError, setHasError] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				setHasError(false);
				const response = await fetch(`${apiUrl}${location}/?token=${apiToken}`);
				const result = await response.json();
				if (result.status !== "ok") throw new Error("Failed to fetch data");
				console.log("Data fetched from hook: ", result.data);
				setData(result.data as APIResponse["data"]);
			} catch (e) {
				setHasError(true);
				setData(null);
				console.error(e);
			} finally {
				setIsLoading(false);
			}
		};
		if (location) fetchData();
	}, [location]);

	return { data, hasError, isLoading };
}
