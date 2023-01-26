import { WStates } from '../../interfaces/weather.d';

interface WColors {
	backcolorcard: string;
	tempColorClass: string;
	infoColorClass: string;
	classIcons: string;
	sourceIcon: string;
}

export const getColorsAndIcons = (description: string): WColors => {
	const colors: WColors = {
		backcolorcard: '',
		tempColorClass: '',
		infoColorClass: '',
		classIcons: '',
		sourceIcon: '',
	};

	switch (description) {
		case WStates.cloudy:
			colors.backcolorcard = '#4DB0D3';
			colors.tempColorClass = 'day__temperature--yellow';
			colors.infoColorClass = 'white';
			colors.classIcons = 'day__weather--cloudy';
			colors.sourceIcon = '/images/cloudy.svg';
			break;
		case WStates.sunny:
			colors.backcolorcard = '#E6DF95';
			colors.tempColorClass = 'day__temperature--blue';
			colors.infoColorClass = '#247490';
			colors.classIcons = 'day__weather--sunny';
			colors.sourceIcon = '/images/sunny.svg';
			break;
		case WStates.stormy:
			colors.backcolorcard = '#0E2E3A';
			colors.tempColorClass = 'day__temperature--yellow';
			colors.infoColorClass = 'white';
			colors.classIcons = 'day__weather--stormy';
			colors.sourceIcon = '/images/stormy.svg';
			break;
		case WStates.partlycloudy:
			colors.backcolorcard = '#2B8BAD';
			colors.tempColorClass = 'day__temperature--yellow';
			colors.infoColorClass = 'white';
			colors.classIcons = '.day__weather--partly-cloudy';
			colors.sourceIcon = '/images/partly-cloudy.svg';
			break;
		case WStates.snowy:
			colors.backcolorcard = '#BCE1EF';
			colors.tempColorClass = 'day__temperature--black';
			colors.infoColorClass = 'blue';
			colors.classIcons = 'day__weather--snowy';
			colors.sourceIcon = '/images/snowy.svg';
			break;
		case WStates.rainy:
			colors.backcolorcard = '#4DB0D3';
			colors.tempColorClass = 'day__temperature--yellow';
			colors.infoColorClass = 'white';
			colors.classIcons = 'day__weather--rainy';
			colors.sourceIcon = '/images/rainy.svg';
			break;
	}
	return colors;
};
