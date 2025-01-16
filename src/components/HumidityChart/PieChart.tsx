import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import styles from "./PieChart.module.css";

interface Props {
	value: number;
}

export default function HumidityChart({ value }: Props) {
	const data = [
		{ name: "Humidity", value: value },
		{ name: "Remaining", value: 100 - value },
	];

	const diameter = 150;

	return (
		<div
			style={{
				height: `${diameter}px`,
				width: `${diameter}px`,
				position: "relative",
			}}
		>
			<span
				className={styles.text}
				style={{
					fontSize: diameter / 12,
					top: `${diameter / 5}px`,
					left: `${diameter / 2}px`,
				}}
			>
				Humidity
			</span>
			<span
				className={styles.text}
				style={{
					fontSize: diameter / 10,
					top: `${diameter / 3}px`,
					left: `${diameter / 2}px`,
				}}
			>
				{value + "%"}
			</span>
			<ResponsiveContainer width="100%" height="100%">
				<PieChart width={diameter} height={diameter}>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						labelLine={false}
						outerRadius={diameter / 2}
						fill="var(--slate-blue)"
						dataKey="value"
						stroke="transparent"
					>
						<Cell fill={"var(--sky-blue)"} />
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}
