import './App.css';
import { useEffect, useRef, useState } from 'react';
import DayList from './components/DayList/DayList';
import Location from './components/Location/Location';

function App() {
	//const coords = JSON.parse(localStorage.getItem('coords'));
	// const coords = useRef<string>('vacio');
	// const getCurrentLocation = (): void => {
	// 	if (navigator.geolocation) {
	// 		navigator.geolocation.getCurrentPosition(
	// 			(position: GeolocationPosition): void => {
	// 				console.log(position);
	// 				coords.current =
	// 					position.coords.latitude + ',' + position.coords.longitude;
	// 			}
	// 		);
	// 	}
	// };

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position: GeolocationPosition): void => {
					console.log(position);
					setLocation(position.coords.latitude + ',' + position.coords.longitude);
				}
			);
		}
	}, []);

	// const getInitLocation = (): any => {
	// 	getCurrentLocation();
	// 	console.log(coords.current);
	// 	return coords.current;
	// };

	const [location, setLocation] = useState<string>('');
	const [resolvedLocation, setResolvedLocation] = useState<string>('');

	const updateLocation = (locationToSearch: string): void => {
		setLocation(locationToSearch);
	};

	const updateResolvedLocation = (locationResolved: string): void => {
		setResolvedLocation(locationResolved);
	};

	return (
		<div className='App'>
			<Location
				updateLocation={updateLocation}
				locationDescription={resolvedLocation}
			/>
			<DayList location={location} updateResolvedLocation={updateResolvedLocation} />
		</div>
	);
}

export default App;
