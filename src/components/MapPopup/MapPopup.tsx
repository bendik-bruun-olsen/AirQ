import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
	name: string;
	aqi: string;
}

export default function MapPopup({ name, aqi }: Props) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/dashboard");
	};

	return (
		<>
			<strong>{name}</strong>
			<br />
			AQI: {aqi}
			<br />
			<Button variant="contained" size="small" onClick={handleClick}>
				Select
			</Button>
		</>
	);
}
