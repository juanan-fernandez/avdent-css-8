import './Day.css';
import Card from '../UI/Card/Card';
import Low from '../UI/Low/Low';
import Precip from '../UI/Precip/Precip';
import { Weather } from '../../interfaces/weather';
import { WStates } from '../../interfaces/weather.d';

interface Props {
	weatherData: Weather;
}

interface WColors {
	backcolorcard: string;
	tempcolorcard: string;
	infocolorcard: string;
	classIcons: string;
}

const Day = ({ weatherData }: Props) => {
	const { description, dayNumber, dayName, temperature, rainChance, minTemperature } =
		weatherData;
	const getBackColor = (): WColors => {
		const colors: WColors = {
			backcolorcard: '',
			tempcolorcard: '',
			infocolorcard: '',
			classIcons: '',
		};

		switch (description) {
			case WStates.cloudy:
				colors.backcolorcard = '#4DB0D3';
				colors.tempcolorcard = '#E6DF95';
				colors.infocolorcard = '#D3EBF4';
				colors.classIcons = 'white';
				break;
			case WStates.sunny:
				colors.backcolorcard = '#E6DF95';
				colors.tempcolorcard = '#4DB0D3';
				colors.infocolorcard = '#247490';
				colors.classIcons = 'blue';
				break;
			case WStates.stormy:
				colors.backcolorcard = '#0E2E3A';
				colors.tempcolorcard = '#E6DF95';
				colors.infocolorcard = '#D3EBF4';
				colors.classIcons = 'white';
				break;
			case WStates.partlycloudy:
				colors.backcolorcard = '#2B8BAD';
				colors.tempcolorcard = '#E6DF95';
				colors.infocolorcard = '#D3EBF4';
				colors.classIcons = 'white';
				break;
			case WStates.snowy:
				colors.backcolorcard = '#BCE1EF';
				colors.tempcolorcard = '#0E2E3A';
				colors.infocolorcard = '#247490';
				colors.classIcons = 'blue';
				break;
			case WStates.rainy:
				colors.backcolorcard = '#4DB0D3';
				colors.tempcolorcard = '#E6DF95';
				colors.infocolorcard = '#D3EBF4';
				colors.classIcons = 'white';
				break;
		}
		console.log(description);
		return colors;
	};

	const stylesDay = getBackColor();

	return (
		<div className='day'>
			<p className='day__name'>{dayName.toUpperCase()}</p>
			<p className='day__number'>{dayNumber}</p>
			<Card backColor={stylesDay.backcolorcard} heightpx={450}>
				<div className='day__weather'>
					<img
						className='day__weather--icon'
						src='/images/partlycloudy.svg'
						alt='Partly Cloudy'
					/>
					<p
						className='day__temperature--symbol'
						style={{ color: stylesDay.tempcolorcard }}
					>
						o
					</p>
					<p className='day__temperature' style={{ color: stylesDay.tempcolorcard }}>
						{temperature}
					</p>
					<div
						className='day__precip-low'
						style={{ color: stylesDay.infocolorcard }}
					>
						<Precip classColorName={`precip__${stylesDay.classIcons}`} />
						{rainChance}%
					</div>
					<div
						className='day__precip-low'
						style={{ color: stylesDay.infocolorcard }}
					>
						<Low classColorName={`low__${stylesDay.classIcons}`} />
						{minTemperature}º<span></span>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Day;
