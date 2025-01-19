import { useContext } from "react";
import MapComponent from "../../components/MapComponent";
import useFetchData from "../../hooks/useFetchData";
import { LocationContext } from "../../context/ContextProvider";
import LoadingPage from "../LoadingPage/LoadingPage";

export default function MapPage() {
	const { selectedLocation } = useContext(LocationContext);
	const { data, isLoading } = useFetchData(selectedLocation.uid);

	if (isLoading || data === null) return <LoadingPage />;
	return (
		<>
			<h1>Map</h1>
			<div className="divider" />
			<MapComponent geo={data.city.geo} />
		</>
	);
}
