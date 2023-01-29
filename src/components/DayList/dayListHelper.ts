import { Weather, WStates } from '../../interfaces/weather';

const getConditions = (condition: string): WStates => {
	if (condition.match(/.*rain.*/i)) return WStates.rainy;
	if (condition.match(/.*snow.*/i)) return WStates.snowy;
	if (
		condition.match(/.*fog.*/i) ||
		condition.match(/.*overcast.*/i) ||
		condition.match(/.*cloudy.*/i) ||
		condition.match(/.*haze.*/i) ||
		condition.match(/.*mist.*/i) ||
		condition.match(/.*smoke.*/i)
	)
		return WStates.cloudy;
	if (condition.match(/.*clear.*/i)) return WStates.sunny;
	if (condition.match(/.*storm.*/i)) return WStates.stormy;
	return WStates.undefined;
};

export const transformData = (data: []): Weather[] => {
	const days: Weather[] = data.map(item => {
		return {
			description: WStates.cloudy,
			dayName: 'wed',
			dayNumber: 8,
			temperature: 71,
			rainChance: 50,
			minTemperature: 28,
		};
	});
	return days;
};
