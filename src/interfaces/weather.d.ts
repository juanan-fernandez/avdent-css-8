export enum WStates {
	cloudy = 'cloudy',
	sunny = 'sunny',
	rainy = 'rainy',
	stormy = 'stormy',
	snowy = 'snowy',
	partlycloudy = 'partly-cloudy',
	undefined = 'undefined',
}
export interface Weather {
	description: WStates;
	dayNumber: number;
	dayName: string;
	temperature: number;
	rainChance: number;
	minTemperature: number;
}
