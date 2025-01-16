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
import styles from "./InfoPage.module.css";

export default function InfoPage() {
	return (
		<>
			<h1>Information</h1>
			<div className="divider" />
			<TableContainer component={Paper}>
				<Table sx={{ width: "fit-content" }}>
					<TableHead sx={{ backgroundColor: "#242625" }}>
						<TableRow>
							<TableCell className={`${styles.text} ${styles.box}`}>
								AQI
							</TableCell>
							<TableCell className={`${styles.text} ${styles.box}`}>
								Air Pollution Level
							</TableCell>
							<TableCell className={`${styles.text} ${styles.box}`}>
								Health Implications
							</TableCell>
							<TableCell className={`${styles.text} ${styles.box}`}>
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
								<TableCell className={`${styles.text} ${styles.box}`}>
									{item.AQI}
								</TableCell>
								<TableCell className={`${styles.text} ${styles.box}`}>
									{item.level}
								</TableCell>
								<TableCell className={`${styles.text} ${styles.box}`}>
									{item.healthImplications}
								</TableCell>
								<TableCell className={`${styles.text} ${styles.box}`}>
									{item.cautionaryStatement}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
