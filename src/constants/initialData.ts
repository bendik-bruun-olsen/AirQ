import { APIResponse } from "../interfaces/APIResponse";

const initialData: APIResponse["data"] = {
	aqi: 0,
	idx: 0,
	attributions: [],
	city: {
		geo: [0, 0],
		name: "Unknown",
		url: "",
		location: "",
	},
	dominentpol: "unknown",
	iaqi: {},
	time: {
		s: "",
		tz: "",
		v: 0,
		iso: "",
	},
	forecast: {
		daily: {
			o3: [],
			pm10: [],
			pm25: [],
			uvi: [],
		},
	},
	debug: {
		sync: "",
	},
};

export { initialData };
