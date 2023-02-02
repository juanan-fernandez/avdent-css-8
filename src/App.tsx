import './App.css';
import { useState } from 'react';
import DayList from './components/DayList/DayList';
import Location from './components/Location/Location';

function App() {
	const getCurrentLocation = async (): Promise<any> => {
		if (navigator.geolocation) {
			return await navigator.geolocation.getCurrentPosition(position => {
				return position.coords.latitude + ',' + position.coords.longitude;
			});
		}
	};

	const getInitLocation = (): any => {
		getCurrentLocation().then(location => location);
	};

	const [location, setLocation] = useState<string>(getInitLocation());
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
