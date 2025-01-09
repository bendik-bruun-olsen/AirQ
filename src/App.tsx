import Box from "@mui/material/Box";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";
import Map from "./components/Map/Map";

export default function App() {
	return (
		<Box sx={{ display: "flex" }}>
			<PermanentDrawerLeft />
			<Map />
		</Box>
	);
}
