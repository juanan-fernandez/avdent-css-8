import './Day.css';
import Card from '../UI/Card/Card';
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
					<img src='/images/partlycloudy.svg' alt='Partly Cloudy' />
					<p>{temperature}</p>
					<p>{rainChance}</p>
					<p>{minTemperature}</p>
				</div>
			</Card>
		</div>
	);
};

export default Day;
