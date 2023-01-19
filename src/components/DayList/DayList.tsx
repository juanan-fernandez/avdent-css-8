import './DayList.css';
import { data } from '../../data/weather-data';
import Day from '../Day/Day';

const DayList = () => {
	const list = data.map(day => {
		return <Day weatherData={day} />;
	});
	return <div className='dayslist'>{list}</div>;
};

export default DayList;
