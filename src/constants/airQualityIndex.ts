export const airQualityIndex = [
	{
		AQI: "0 - 50",
		level: "Good",
		healthImplications:
			"Air quality is considered satisfactory, and air pollution poses little or no risk.",
		cautionaryStatement: "None",
		backgroundColor: "var(--good-green)",
	},
	{
		AQI: "51 - 100",
		level: "Moderate",
		healthImplications:
			"Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
		cautionaryStatement:
			"Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.",
		backgroundColor: "var(--moderate-yellow)",
	},
	{
		AQI: "101 - 150",
		level: "Unhealthy for Sensitive Groups",
		healthImplications:
			"Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
		cautionaryStatement:
			"Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.",
		backgroundColor: "var(--sensitive-orange)",
	},
	{
		AQI: "151 - 200",
		level: "Unhealthy",
		healthImplications:
			"Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
		cautionaryStatement:
			"Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion.",
		backgroundColor: "var(--unhealthy-red)",
	},
	{
		AQI: "201 - 300",
		level: "Very Unhealthy",
		healthImplications:
			"Health warnings of emergency conditions. The entire population is more likely to be affected.",
		cautionaryStatement:
			"Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.",
		backgroundColor: "var(--very-unhealthy-purple)",
	},
	{
		AQI: "300+",
		level: "Hazardous",
		healthImplications:
			"Health alert: everyone may experience more serious health effects.",
		cautionaryStatement: "Everyone should avoid all outdoor exertion.",
		backgroundColor: "var(--hazardous-maroon)",
	},
];
