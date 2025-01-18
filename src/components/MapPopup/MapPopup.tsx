import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../../context/ContextProvider";
import { useContext } from "react";
import useFetchData from "../../hooks/useFetchData";
import styles from "./MapPopup.module.css";

interface Props {
	name: string;
	uid: string;
}

export default function MapPopup({ name, uid }: Props) {
	const { setSelectedLocation } = useContext(LocationContext);
	const { data, isLoading, hasError } = useFetchData(uid);

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
			<span className={styles.title}>{name}</span>
			<div className={styles.buttonContainer}>{renderButton()}</div>
		</>
	);
}
