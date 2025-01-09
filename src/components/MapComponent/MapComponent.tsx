import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import styles from "./MapComponent.module.css";

export default function MapComponent() {
	return (
		<MapContainer
			center={[48.8566, 2.3522]}
			zoom={13}
			className={styles.leafletContainer}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		</MapContainer>
	);
}
