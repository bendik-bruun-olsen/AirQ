import { Cell, Pie, PieChart, Tooltip } from "recharts";
import {
	PM10Ranges,
	PM25Ranges,
	PMRangeInterface,
} from "../../constants/PMRanges";
import styles from "./PMGauge.module.css";

interface Props {
	value: number;
	type: string;
}

interface TooltipPayload {
	name: string;
	value: number;
	payload: {
		name: string;
		minValue: number;
		maxValue: number;
		color: string;
		value: number;
	};
	dataKey: string;
	stroke: string;
	fill: string;
	cx: number;
	cy: number;
	minValue: number;
	maxValue: number;
	color: string;
}

interface CustomTooltipProps {
	active: boolean;
	payload: TooltipPayload[];
}

// interface CustomTooltipProps extends TooltipProps<number, string> {}

export default function PMGauge({ value, type }: Props) {
	const data = type === "pm25" ? PM25Ranges : PM10Ranges;
	const currentRange = data.find(
		(data) => value >= data.minValue && value <= data.maxValue
	);
	const centerX = 100;
	const centerY = 100;
	const innerRadius = 50;
	const outerRadius = 100;

	const renderNeedle = (value: number, data: PMRangeInterface[]) => {
		if (!currentRange) return null;
		const currentRangeIndex = data.findIndex((data) => data === currentRange);
		if (currentRangeIndex === -1) return null;

		const needleColor = "var(--sky-blue)";
		const RADIAN = Math.PI / 180;

		const segmentSizeAngle = 180 / data.length;
		const segmentStartAngle = 180 - currentRangeIndex * segmentSizeAngle;
		const relativePos =
			(value - currentRange.minValue) /
			(currentRange.maxValue - currentRange.minValue);

		const needleAngle = segmentStartAngle - relativePos * segmentSizeAngle;
		const needleLength = (innerRadius + 2 * outerRadius) / 3;
		const sin = Math.sin(-RADIAN * needleAngle);
		const cos = Math.cos(-RADIAN * needleAngle);
		const needleBaseCircleRadius = 5;
		const needleBaseCircleX = centerX + 5;
		const needleBaseCircleY = centerY + 5;
		const needleBaseXba = needleBaseCircleX + needleBaseCircleRadius * sin;
		const needleBaseYba = needleBaseCircleY - needleBaseCircleRadius * cos;
		const needleBaseXbb = needleBaseCircleX - needleBaseCircleRadius * sin;
		const needleBaseYbb = needleBaseCircleY + needleBaseCircleRadius * cos;
		const needleTipX = needleBaseCircleX + needleLength * cos;
		const needleTipY = needleBaseCircleY + needleLength * sin;
		return (
			<>
				<circle
					key="needle-circle"
					cx={needleBaseCircleX}
					cy={needleBaseCircleY}
					r={needleBaseCircleRadius}
					fill={needleColor}
				/>
				<path
					key="needle-path"
					d={`M${needleBaseXba} ${needleBaseYba}L${needleBaseXbb} ${needleBaseYbb} L${needleTipX} ${needleTipY} L${needleBaseXba} ${needleBaseYba}`}
					fill={needleColor}
				/>
			</>
		);
	};

	const customTooltip = ({ active, payload }: CustomTooltipProps) => {
		if (active && payload && payload.length) {
			const { name, minValue, maxValue } = payload[0].payload;
			return (
				<div
					style={{
						backgroundColor: "var(--slate-blue)",
						color: "var(--white)",
						border: `1px solid var(--slate-blue-light)`,
						padding: "8px",
						borderRadius: "5px",
						fontSize: "12px",
						boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
					}}
				>
					<strong>{name}</strong>
					<br />
					Range: {minValue} - {maxValue} µg/m³
				</div>
			);
		}
		return null;
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h3>{type === "pm25" ? "Particulate Matter" : "Particulate Matter"}</h3>
				<span className={styles.value}>
					{type === "pm25" ? "(2.5 microns)" : "(10 microns)"}
				</span>
			</div>
			<div className={styles.pieContainer}>
				<PieChart
					width={centerX * 2 + 10}
					height={centerY + 10}
					className={styles.pieChart}
				>
					<Pie
						dataKey="value"
						startAngle={180}
						endAngle={0}
						data={data}
						cx={centerX}
						cy={centerY}
						innerRadius={innerRadius}
						outerRadius={outerRadius}
						stroke="none"
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.color} />
						))}
					</Pie>
					<Tooltip content={customTooltip} />
					{renderNeedle(value, data)}
				</PieChart>
			</div>
			<div className={styles.textContainer}>
				<h4>Value:</h4>
				<span className={styles.value}>{`${value} µg/m³`}</span>
			</div>
			<div className={styles.textContainer}>
				<h4>Status:</h4>
				<span className={styles.value}>{currentRange?.name ?? "Unknown"}</span>
			</div>
		</div>
	);
}
