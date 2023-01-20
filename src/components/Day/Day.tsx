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
}

const Day = ({ weatherData }: Props) => {
	const { description, dayNumber, dayName, temperature, rainChance, minTemperature } =
		weatherData;
	const getBackColor = (): WColors => {
		const colors: WColors = { backcolorcard: '', tempcolorcard: '', infocolorcard: '' };
		//Cloudy
		colors.backcolorcard = '#4DB0D3';
		colors.tempcolorcard = '#E6DF95';
		colors.infocolorcard = '#D3EBF4';

		//Sunny
		colors.backcolorcard = '#E6DF95';
		colors.tempcolorcard = '#4DB0D3';
		colors.infocolorcard = '#247490';

		//stormy
		colors.backcolorcard = '#0E2E3A';
		colors.tempcolorcard = '#E6DF95';
		colors.infocolorcard = '#D3EBF4';
		//Snowy
		colors.backcolorcard = '#BCE1EF';
		colors.tempcolorcard = '#0E2E3A';
		colors.infocolorcard = '#247490';
		//Rainy
		colors.backcolorcard = '#4DB0D3';
		colors.tempcolorcard = '#E6DF95';
		colors.infocolorcard = '#D3EBF4';
		//Partly Cloudy
		colors.backcolorcard = '#2B8BAD';
		colors.tempcolorcard = '#E6DF95';
		colors.infocolorcard = '#D3EBF4';

		return colors;
	};
	return (
		<div className='day'>
			<p className='day__name'>{dayName.toUpperCase()}</p>
			<p className='day__number'>{dayNumber}</p>
			<Card backColor={getBackColor().backcolorcard} heightpx={450}>
				<div className='day__weather'>
					<img
						className='day__weather--icon'
						src='/images/partlycloudy.svg'
						alt='Partly Cloudy'
					/>
					<p className='day__temperature--symbol'>o</p>
					<p className='day__temperature'>{temperature}</p>
					<div className='day__precip-low'>
						<Precip classColorName='precip__blue' />
						{rainChance}%
					</div>
					<div className='day__precip-low'>
						<Low classColorName='low__blue' />
						{minTemperature}º<span></span>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Day;
