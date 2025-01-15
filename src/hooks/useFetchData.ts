import { useEffect, useState } from "react";
import { APIResponse } from "../interfaces/APIResponse";

const apiUrl = "http://api.waqi.info/feed/";
const apiToken = import.meta.env.VITE_API_TOKEN;

export default function useFetchData(uid: string) {
	const [data, setData] = useState<APIResponse["data"] | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [hasError, setHasError] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log("Fetching from hook");

				setIsLoading(true);
				setHasError(false);
				const response = await fetch(`${apiUrl}@${uid}/?token=${apiToken}`);
				const result = await response.json();
				if (result.status !== "ok") throw new Error("Failed to fetch data");
				console.log("Success: ", result.data);

				setData(result.data as APIResponse["data"]);
			} catch (e) {
				setHasError(true);
				setData(null);
				console.error(e);
			} finally {
				setIsLoading(false);
			}
		};
		if (uid) fetchData();
	}, [uid]);

	return { data, hasError, isLoading };
}
