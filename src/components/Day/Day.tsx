import './Day.css';
import Card from '../UI/Card/Card';
import Low from '../UI/Low/Low';
import Precip from '../UI/Precip/Precip';
import { Weather } from '../../interfaces/weather';

interface Props {
	weatherData: Weather;
}

const Day = ({ weatherData }: Props) => {
	const { dayNumber, dayName, temperature, rainChance, minTemperature } = weatherData;
	const getBackColor = (): string => {
		return '#E6DF95';
	};
	return (
		<div className='day'>
			<p className='day__name'>{dayName.toUpperCase()}</p>
			<p className='day__number'>{dayNumber}</p>
			<Card backColor={getBackColor()} heightpx={450}>
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
