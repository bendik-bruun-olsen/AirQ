import {
	Box,
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { Forecast } from "../../interfaces/APIResponse";
import { useState } from "react";
import styles from "./ForecastGraph.module.css";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

interface Props {
	forecast: Forecast;
}

export default function ForeCastGraph({ forecast }: Props) {
	const [selection, setSelection] = useState<string>("o3");
	const selectionIndex = Object.keys(forecast.daily).findIndex(
		(key) => key === selection
	);
	const data = Object.values(forecast.daily);
	console.log("data: ", data);

	console.log("currentData: ", data[selectionIndex]);

	const handleChange = (event: SelectChangeEvent) => {
		setSelection(event.target.value as string);
	};

	return (
		<>
			<Box sx={{ minWidth: 120, maxWidth: 280 }}>
				<FormControl fullWidth>
					<Select id="select-menu" value={selection} onChange={handleChange}>
						<MenuItem value={"o3"}>Ozon</MenuItem>
						<MenuItem value={"pm10"}>Particulate Matter (10 microns)</MenuItem>
						<MenuItem value={"pm25"}>Particulate Matter (2.5 microns)</MenuItem>
						<MenuItem value={"uvi"}>UV Index</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<div className={styles.graphContainer}>
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						width={500}
						height={400}
						data={data[selectionIndex]}
						margin={{
							top: 10,
							right: 30,
							left: 0,
							bottom: 0,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="day" />
						<YAxis />
						<Tooltip />
						<Area
							type="monotone"
							dataKey="avg"
							stroke="#8884d8"
							fill="#8884d8"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</>
	);
}
