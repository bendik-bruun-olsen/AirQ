import { Cell, Pie, PieChart } from "recharts";
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

export default function PMGauge({ value, type }: Props) {
	const data = type === "pm25" ? PM25Ranges : PM10Ranges;
	const currentRange = data.find(
		(data) => value >= data.minValue && value <= data.maxValue
	);
	const currentRangeIndex = data.findIndex((data) => data === currentRange);
	const centerX = 100;
	const centerY = 100;
	const innerRadius = 50;
	const outerRadius = 100;
	const gaugeAngle = 180;

	const renderNeedle = (value: number, data: PMRangeInterface[]) => {
		const needleColor = "#000000";
		const RADIAN = Math.PI / gaugeAngle;
		if (!currentRange) return null;
		const totalSegments = data.length;
		const segmentAngle = gaugeAngle / totalSegments;
		const baseAngle = segmentAngle * currentRangeIndex;
		const relativePosition =
			(value - currentRange.minValue) /
			(currentRange.maxValue - currentRange.minValue);
		const needleAngle =
			gaugeAngle * (baseAngle + segmentAngle * relativePosition);
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
					stroke="none"
				/>
				<path
					key="needle-path"
					d={`M${needleBaseXba} ${needleBaseYba}L${needleBaseXbb} ${needleBaseYbb} L${needleTipX} ${needleTipY} L${needleBaseXba} ${needleBaseYba}`}
					stroke="none"
					fill={needleColor}
				/>
			</>
		);
	};

	return (
		<div className={styles.wrapper}>
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
					fill="#8884d8"
					stroke="none"
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={entry.color} />
					))}
				</Pie>
				{renderNeedle(value, data)}
			</PieChart>
			<h3>{`Status: ${currentRange?.name ?? "Unknown"}`}</h3>
		</div>
	);
}
