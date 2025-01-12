import {
	Paper,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Table,
} from "@mui/material";
import { airQualityIndex } from "../../constants/airQualityIndex";

const textStyle = {
	color: "white",
	textShadow: "0px 1px 2px rgba(0, 0, 0, 0.8)",
	minWidth: "100px",
};

export default function InfoPage() {
	return (
		<>
			<h1>Information</h1>
			<hr />
			<TableContainer component={Paper}>
				<Table sx={{ maxWidth: "1200px" }}>
					<TableHead sx={{ backgroundColor: "#242625" }}>
						<TableRow>
							<TableCell sx={textStyle}>AQI</TableCell>
							<TableCell sx={textStyle}>Air Pollution Level</TableCell>
							<TableCell sx={textStyle}>Health Implications</TableCell>
							<TableCell sx={textStyle}>
								Cautionary Statement (for PM2.5)
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{airQualityIndex.map((item) => (
							<TableRow
								key={item.level}
								sx={{ backgroundColor: item.backgroundColor }}
							>
								<TableCell sx={textStyle}>{item.AQI}</TableCell>
								<TableCell sx={textStyle}>{item.level}</TableCell>
								<TableCell sx={textStyle}>{item.healthImplications}</TableCell>
								<TableCell sx={textStyle}>{item.cautionaryStatement}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
