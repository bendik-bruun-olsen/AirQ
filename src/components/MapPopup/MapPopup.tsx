import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../../context/ContextProvider";
import { useContext } from "react";

interface Props {
	name: string;
	aqi: string;
	uid: string;
}

export default function MapPopup({ name, aqi, uid }: Props) {
	const { setSelectedLocation } = useContext(LocationContext);
	const navigate = useNavigate();

	const handleClick = () => {
		setSelectedLocation({
			name: name,
			uid: uid,
		});
		navigate("/dashboard");
	};

	console.log("Popup; Name: ", name, "Aqi:", aqi, "idx: ", uid);

	return (
		<>
			<strong>{name}</strong>
			<br />
			AQI: {aqi}
			<br />
			<Button variant="contained" size="small" onClick={handleClick}>
				View
			</Button>
		</>
	);
}
