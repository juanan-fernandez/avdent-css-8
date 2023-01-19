import './Day.css';
import Card from '../UI/Card/Card';
import Low from '../UI/Low/Low';
import { Weather } from '../../interfaces/weather';

import low from '../../assets/low.svg';
import precipitacion from '../../assets/precipitation.svg';

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
					<p className='day__rainchance'>
						<img src={precipitacion} className='day__rainchance--logo' />
						{rainChance} %
					</p>
					<p className='day__rainchance'>
						{/* <img src={low} className='day__rainchance--logo' /> */}
						<Low classColorName='azul' />
						{minTemperature}º
					</p>
				</div>
			</Card>
		</div>
	);
};

export default Day;
