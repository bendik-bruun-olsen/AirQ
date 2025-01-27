import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	useMapEvents,
} from "react-leaflet";
import MapPopup from "./MapPopup/MapPopup";

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

	const map = useMapEvents({
		moveend: () => {
			fetchMarkers(map.getBounds());
		},
	});

	const fetchMarkers = async (bounds: L.LatLngBounds) => {
		const boundsString = `${bounds.getNorth()},${bounds.getWest()},${bounds.getSouth()},${bounds.getEast()}`;
		try {
			const response = await fetch(
				`${apiUrl}?latlng=${boundsString}&token=${apiToken}`
			);
			const data = await response.json();
			if (data.status !== "ok") throw new Error();
			setStations(data.data);
		} catch {
			console.error("Failed to fetch markers");
		}
	};

	useEffect(() => {
		if (map) {
			fetchMarkers(map.getBounds());
		}
	}, [map]);

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
						<MapPopup name={station.station.name} uid={station.uid} />
					</Popup>
				</Marker>
			))}
		</>
	);
}

export default function MapComponent({ geo }: { geo: [number, number] }) {
	return (
		<MapContainer
			center={geo}
			zoom={13}
			style={{ height: "600px", width: "100%" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<FetchMarkers />
		</MapContainer>
	);
}
