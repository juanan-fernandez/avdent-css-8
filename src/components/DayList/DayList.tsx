import './DayList.css';
import { data } from '../../data/weather-data';
import Day from '../Day/Day';

interface DayListProps {
	location: string;
}

const DayList = ({ location }: DayListProps) => {
	//con location debo montar la url
	const apiKey = import.meta.env.VITE_VISUALCROSSING_APIKEY;

	const list = data.map(day => {
		return <Day key={day.dayName + day.dayNumber} weatherData={day} />;
	});

	return <div className='dayslist'>{list}</div>;
};

export default DayList;
