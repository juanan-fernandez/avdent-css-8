import './DayList.css';
import { useEffect, useState } from 'react';
import Spinner from '..//UI/Spinner/Spinner';
import { useFetch, HttpHookResponse } from '../../hooks/useFetch';
import { Weather } from '../../interfaces/weather';
import { transformData } from './dayListHelper';

import Day from '../Day/Day';

interface DayListProps {
	location: string;
	updateResolvedLocation(locationDesc: string): void;
}

const DayList = ({ location, updateResolvedLocation }: DayListProps) => {
	//con location y apiKey debo montar la url
	const apiKey = import.meta.env.VITE_VISUALCROSSING_APIKEY;

	const getUrl = (): string => {
		return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&key=${apiKey}&contentType=json`;
	};

	useEffect(() => {
		setUrl(getUrl());
	}, [location]);

	const [url, setUrl] = useState(getUrl);
	const { data, loading, error }: HttpHookResponse = useFetch(url);

	useEffect(() => {
		if (data) updateResolvedLocation(data.resolvedAddress);
	}, [data]);

	let renderOutput: React.ReactNode = null;

	if (error) {
		console.log(error);
		renderOutput = <p>{error}</p>;
	}

	if (loading) {
		renderOutput = (
			<div>
				<Spinner hexColor='#247490' pixelsSize={155} />
			</div>
		);
	}

	if (data) {
		console.log(data);
		//updateResolvedLocation(data.resolvedAddress);
		const days = transformData(data.days);
		renderOutput = days.map((day: Weather) => {
			return <Day key={day.dayName + day.dayNumber} weatherData={day} />;
		});
	}

	return <div className='dayslist'>{renderOutput}</div>;
};

export default DayList;
