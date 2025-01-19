import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { Forecast, ForecastData } from "../../interfaces/APIResponse";
import { useEffect, useState } from "react";
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

interface TypeMapInterface {
	[key: string]: string;
}

const typeMap: TypeMapInterface = {
	o3: "Ozon",
	pm10: "Particulate Matter (10 microns)",
	pm25: "Particulate Matter (2.5 microns)",
	uvi: "UV Index",
};

export default function ForeCastGraph({ forecast }: Props) {
	const [data, setData] = useState(forecast.daily);
	useEffect(() => {
		const updatedData = JSON.parse(JSON.stringify(forecast.daily));
		for (const key in updatedData) {
			const sum = updatedData[key].reduce(
				(acc: number, reading: ForecastData) => acc + reading.avg,
				0
			);
			if (sum === 0) delete updatedData[key];
		}
		setData(updatedData);
	}, [forecast.daily]);

	const dataKeys = Object.keys(data);
	const [selection, setSelection] = useState<string>(dataKeys[0]);
	const selectionIndex = dataKeys.findIndex((key) => key === selection);
	const dataValues = Object.values(data);

	dataValues.forEach((entry) => {
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
							{dataKeys.map((key) => (
								<MenuItem key={key} value={key}>
									{typeMap[key as keyof TypeMapInterface]}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
			</div>
			<div className={styles.graphContainer}>
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						data={dataValues[selectionIndex]}
						margin={{
							top: 10,
							right: 0,
							left: -35,
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
