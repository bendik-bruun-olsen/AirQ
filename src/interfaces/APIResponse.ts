interface Attribution {
	url: string;
	name: string;
}

interface City {
	geo: [number, number];
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

export interface ForecastData {
	avg: number;
	day: string;
	max: number;
	min: number;
}

export interface Forecast {
	daily: {
		o3: ForecastData[];
		pm10: ForecastData[];
		pm25: ForecastData[];
		uvi: ForecastData[];
	};
}

interface Time {
	s: string;
	tz: string;
	v: number;
	iso: string;
}

interface Debug {
	sync: string;
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
