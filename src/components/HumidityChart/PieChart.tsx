import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

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
				style={{
					fontSize: diameter / 12,
					position: "absolute",
					top: `${diameter / 5}px`,
					left: `${diameter / 2}px`,
					zIndex: 1,
					transform: "translate(-50%, -50%)",
					color: "#ffffff",
				}}
			>
				Humidity
			</span>
			<span
				style={{
					fontSize: diameter / 10,
					position: "absolute",
					top: `${diameter / 3}px`,
					left: `${diameter / 2}px`,
					zIndex: 1,
					transform: "translate(-50%, -50%)",
					color: "#ffffff",
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
						fill="#ffffff"
						dataKey="value"
						stroke="transparent"
					>
						<Cell fill={"#0088FE"} />
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}
