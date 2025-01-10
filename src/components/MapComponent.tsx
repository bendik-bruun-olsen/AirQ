import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	useMapEvents,
} from "react-leaflet";

const apiToken = import.meta.env.VITE_API_TOKEN;
const apiUrl = "https://api.waqi.info/v2/map/bounds/";

interface StationData {
	uid: string;
	lat: number;
	lon: number;
	aqi: string;
	station: { name: string };
}

function FetchMarkers() {
	const [stations, setStations] = useState<StationData[]>([]);
	const [error, setError] = useState<string | null>(null);

	const map = useMapEvents({
		moveend: () => {
			const bounds = map.getBounds();
			const boundsString = `${bounds.getNorth()},${bounds.getWest()},${bounds.getSouth()},${bounds.getEast()}`;
			fetchMarkers(boundsString);
		},
	});

	const fetchMarkers = async (bounds: string) => {
		try {
			const response = await fetch(
				`${apiUrl}?latlng=${bounds}&token=${apiToken}`
			);
			const data = await response.json();
			if (data.status !== "ok") throw new Error(data.data);
			setStations(data.data);
			setError(null);
		} catch {
			setError("Failed to fetch markers");
		}
	};

	return (
		<>
			{stations.map((station) => (
				<Marker
					key={station.uid}
					position={[station.lat, station.lon]}
					icon={L.icon({
						iconUrl: `https://waqi.info/mapicon/${station.aqi}.30.png`,
						iconSize: [30, 30],
						iconAnchor: [15, 15],
					})}
				>
					<Popup>
						<strong>{station.station.name}</strong>
						<br />
						AQI: {station.aqi}
					</Popup>
				</Marker>
			))}
			{error && <div>{error}</div>}
		</>
	);
}

export default function MapComponent() {
	return (
		<MapContainer
			center={[48.8566, 2.3522]}
			zoom={13}
			style={{ height: "800px", width: "1200px" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<FetchMarkers />
		</MapContainer>
	);
}
