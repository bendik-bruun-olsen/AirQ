interface Attribution {
	url: string;
	name: string;
}

interface City {
	geo: [number, number]; // Tuple for latitude and longitude
	name: string;
	url: string;
	location: string;
}

interface IAQI {
	co?: { v: number };
	h?: { v: number };
	no2?: { v: number };
	o3?: { v: number };
	p?: { v: number };
	pm10?: { v: number };
	pm25?: { v: number };
	so2?: { v: number };
	t?: { v: number };
	w?: { v: number };
}

interface ForecastData {
	avg: number;
	day: string;
	max: number;
	min: number;
}

interface Forecast {
	daily: {
		o3: ForecastData[];
		pm10: ForecastData[];
		pm25: ForecastData[];
		uvi: ForecastData[];
	};
}

interface Time {
	s: string; // Local time string
	tz: string; // Timezone offset
	v: number; // Unix timestamp in seconds
	iso: string; // ISO 8601 date-time string
}

interface Debug {
	sync: string; // Synchronization timestamp
}

export interface APIResponse {
	status: string;
	data: {
		aqi: number;
		idx: number;
		attributions: Attribution[];
		city: City;
		dominentpol: string;
		iaqi: IAQI;
		time: Time;
		forecast: Forecast;
		debug: Debug;
	};
}
