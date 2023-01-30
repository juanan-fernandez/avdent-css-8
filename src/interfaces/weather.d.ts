export enum WStates {
	cloudy = 'cloudy',
	foggy = 'foggy',
	sunny = 'sunny',
	rainy = 'rainy',
	stormy = 'stormy',
	snowy = 'snowy',
	partlycloudy = 'partly-cloudy',
	undefined = 'undefined',
}
export interface Weather {
	icon: WStates;
	description: string;
	dayNumber: number;
	dayName: string;
	temperature: number;
	rainChance: number;
	minTemperature: number;
}
