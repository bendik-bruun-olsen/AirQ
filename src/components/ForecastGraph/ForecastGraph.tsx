import {
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
import { formatDate } from "../../utils/helpers";

interface Props {
	forecast: Forecast;
}

export default function ForeCastGraph({ forecast }: Props) {
	const [selection, setSelection] = useState<string>("o3");
	const selectionIndex = Object.keys(forecast.daily).findIndex(
		(key) => key === selection
	);
	const data = Object.values(forecast.daily);

	data.forEach((entry) => {
		entry.forEach((item) => {
			item.day = formatDate(item.day);
		});
	});

	const handleChange = (event: SelectChangeEvent) => {
		setSelection(event.target.value as string);
	};

	return (
		<>
			<div className={styles.header}>
				<h2>Forecast</h2>
				<div className={styles.selectMenuContainer}>
					<FormControl fullWidth>
						<Select
							sx={{
								height: 40,
								backgroundColor: "var(--slate-blue)",
								color: "var(--white)",
							}}
							id="select-menu"
							className={styles.selectMenu}
							value={selection}
							onChange={handleChange}
							MenuProps={{
								PaperProps: {
									sx: {
										backgroundColor: "var(--slate-blue)",
										color: "var(--white)",
										"& .MuiMenuItem-root": {
											backgroundColor: "var(--slate-blue)",
											"&:hover": {
												backgroundColor: "var(--sky-blue)",
											},
											"&.Mui-selected": {
												backgroundColor: "var(--slate-blue-light)",
												"&:hover": {
													backgroundColor: "var(--sky-blue)",
												},
											},
										},
									},
								},
							}}
						>
							<MenuItem value={"o3"}>Ozon</MenuItem>
							<MenuItem value={"pm10"}>
								Particulate Matter (10 microns)
							</MenuItem>
							<MenuItem value={"pm25"}>
								Particulate Matter (2.5 microns)
							</MenuItem>
							<MenuItem value={"uvi"}>UV Index</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
			<div className={styles.graphContainer}>
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
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
						<Area type="monotone" dataKey="avg" fill="var(--sky-blue)" />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</>
	);
}
