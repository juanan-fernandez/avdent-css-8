import { Weather, WStates, ApiWeatherDay } from '../../interfaces/weather';

const getDayOfWeek = (stringDate: string): string => {
	const date = new Date(stringDate);
	const day = date.getDay();
	const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	return weekDays[day];
};

const getDayOfMonth = (stringDate: string): number => {
	return new Date(stringDate).getDate();
};

const getMonth = (stringDate: string): string => {
	const month = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	return month[new Date(stringDate).getMonth()];
};

const getConditions = (icon: string): WStates => {
	if (icon.match(/.*rain.*/i)) return WStates.rainy;
	if (icon.match(/.*snow.*/i)) return WStates.snowy;
	if (icon.match(/.*overcast.*/i) || icon.match(/.*cloudy.*/i)) return WStates.cloudy;
	if (
		icon.match(/.*fog.*/i) ||
		icon.match(/.*haze.*/i) ||
		icon.match(/.*mist.*/i) ||
		icon.match(/.*smoke.*/i)
	)
		return WStates.foggy;
	if (icon.match(/.*clear.*/i)) return WStates.sunny;
	if (icon.match(/.*storm.*/i)) return WStates.stormy;
	return WStates.undefined;
};

export const transformData = (data: ApiWeatherDay[]): Weather[] => {
	const days: Weather[] = data.map(item => {
		return {
			icon: getConditions(item.icon),
			description: item.description,
			dayName: getDayOfWeek(item.datetime),
			dayNumber: getDayOfMonth(item.datetime),
			temperature: item.temp,
			rainChance: item.precipprob,
			minTemperature: item.tempmin,
		};
	});
	return days;
};
