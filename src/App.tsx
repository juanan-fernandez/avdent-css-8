import './App.css';
import { useState } from 'react';
import DayList from './components/DayList/DayList';
import Location from './components/Location/Location';
import { getCurrentLocation } from './components/Location/locationHelper';

const coords = await getCurrentLocation();

function App() {
	//const coords = JSON.parse(localStorage.getItem('coords'));

	const [location, setLocation] = useState<string>(coords);
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
