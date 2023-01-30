import './Day.css';
import Card from '../UI/Card/Card';
import Low from '../UI/Low/Low';
import Precip from '../UI/Precip/Precip';
import { getColorsAndIcons } from './dayHelper';
import { Weather } from '../../interfaces/weather';

interface Props {
	weatherData: Weather;
}

const Day = ({ weatherData }: Props) => {
	const {
		icon,
		description,
		dayNumber,
		dayName,
		temperature,
		rainChance,
		minTemperature,
	} = weatherData;

	const stylesDay = getColorsAndIcons(icon);

	return (
		<div className='day'>
			<p className='day__name'>{dayName.toUpperCase()}</p>
			<p className='day__number'>{dayNumber}</p>
			<Card backColor={stylesDay.backcolorcard} heightpx={480}>
				<div className='day__weather'>
					<img
						className={`day__weather--icon ${stylesDay.classIcons}`}
						src={`${stylesDay.sourceIcon}`}
						alt={description}
					/>
					<p className={`day__temperature--symbol ${stylesDay.tempColorClass}`}>o</p>
					<p className={`day__temperature ${stylesDay.tempColorClass}`}>
						{temperature}
					</p>
					<div
						className={`day__precip-low day__precip-low--${stylesDay.infoColorClass}`}
					>
						<Precip classColorName={`precip__${stylesDay.infoColorClass}`} />
						{rainChance}%
					</div>
					<div
						className={`day__precip-low day__precip-low--${stylesDay.infoColorClass}`}
					>
						<Low classColorName={`low__${stylesDay.infoColorClass}`} />
						{minTemperature}º<span></span>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Day;
