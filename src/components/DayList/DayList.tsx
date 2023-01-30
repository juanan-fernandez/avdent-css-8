import './DayList.css';
import { useState, useEffect } from 'react';
import Spinner from '..//UI/Spinner/Spinner';
import { useFetch, HttpHookResponse } from '../../hooks/useFetch';
import { Weather } from '../../interfaces/weather';
//import { data } from '../../data/weather-data';
import Day from '../Day/Day';

interface DayListProps {
	location: string;
}

const DayList = ({ location }: DayListProps) => {
	//con location y apiKey debo montar la url
	const apiKey = import.meta.env.VITE_VISUALCROSSING_APIKEY;
	if (!location) location = 'ALICANTE';
	const getUrl = () => {
		return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&key=${apiKey}&contentType=json`;
	};
	const [url, setUrl] = useState(getUrl);
	const { data, loading, error }: HttpHookResponse = useFetch(url);

	let renderOutput: any = null;

	if (error) {
		console.log(error);
		renderOutput = error;
	}

	if (loading) {
		renderOutput = (
			<div>
				<Spinner hexColor='#247490' pixelsSize={155} />
			</div>
		);
	}

	if (data) console.log(data);
	if (data && null) {
		renderOutput = data.days.map((day: Weather) => {
			return <Day key={day.dayName + day.dayNumber} weatherData={day} />;
		});
	}

	return <div className='dayslist'>{renderOutput}</div>;
};

export default DayList;
