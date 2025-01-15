import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

interface Props {
	value: number;
}

// interface LabelProps {
// 	cx: string;
// 	cy: string;
// 	midAngle: number;
// 	innerRadius: number;
// 	outerRadius: number;
// 	percent: number;
// }

export default function HumidityChart({ value }: Props) {
	const data = [
		{ name: "Humidity", value: value },
		{ name: "Remaining", value: 100 - value },
	];
	// const RADIAN = Math.PI / 180;
	// const renderLabel = ({
	// 	cx,
	// 	cy,
	// 	midAngle,
	// 	innerRadius,
	// 	outerRadius,
	// 	percent,
	// }: LabelProps) => {
	// 	if (percent !== value / 100) return null;
	// 	const x = cx;
	// 	const y = Number(cy) / 1.5;
	// 	return (
	// 		<text
	// 			x={x}
	// 			y={y}
	// 			fill="white"
	// 			textAnchor={"middle"}
	// 			dominantBaseline="middle"
	// 			fontSize={22}
	// 		>
	// 			{`${(percent * 100).toFixed(0)}%`}
	// 		</text>
	// 	);
	// };

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
