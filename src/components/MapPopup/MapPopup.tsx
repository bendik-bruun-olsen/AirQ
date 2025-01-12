import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../../context/ContextProvider";
import { useContext } from "react";
import useFetchData from "../../hooks/useFetchData";

interface Props {
	name: string;
	aqi: string;
	uid: string;
}

export default function MapPopup({ name, aqi, uid }: Props) {
	const { setSelectedLocation } = useContext(LocationContext);
	const { data, isLoading, hasError } = useFetchData(name);

	const navigate = useNavigate();

	const handleClick = () => {
		setSelectedLocation({
			name: name,
			uid: uid,
		});
		navigate("/dashboard");
	};

	const renderButton = () => {
		if (isLoading) {
			return (
				<Button variant="contained" disabled>
					Loading...
				</Button>
			);
		} else if (hasError) {
			return (
				<Button variant="contained" disabled>
					No data
				</Button>
			);
		} else if (data) {
			return (
				<Button variant="contained" size="small" onClick={handleClick}>
					View details
				</Button>
			);
		}
	};

	return (
		<>
			<strong>{name}</strong>
			<br />
			AQI: {aqi}
			<br />
			{renderButton()}
		</>
	);
}
