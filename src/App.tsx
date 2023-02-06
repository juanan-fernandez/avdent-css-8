import './App.css';
import { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import DayList from './components/DayList/DayList';
import Location from './components/Location/Location';
import Spinner from './components/UI/Spinner/Spinner';
import { getCurrentLocation } from './components/Location/locationHelper';

function App() {
	const [location, setLocation] = useState<string>('');
	const [resolvedLocation, setResolvedLocation] = useState<string>('');
	const [saveNewLocation, storedLocation] = useLocalStorage('initLocation', '');

	useEffect(() => {
		if (storedLocation) {
			setLocation(loc => storedLocation as string);
			return;
		}
		if (!location) {
			getCurrentLocation().then(geoLoc => {
				setLocation(geoLoc);
				saveNewLocation(geoLoc);
			});
		}
	}, []);

	const updateLocation = (locationToSearch: string): void => {
		setLocation(locationToSearch);
		saveNewLocation(locationToSearch);
	};

	const updateResolvedLocation = (locationResolved: string): void => {
		setResolvedLocation(locationResolved);
	};

	return (
		<div className='App'>
			{location ? (
				<div>
					<Location
						updateLocation={updateLocation}
						locationDescription={resolvedLocation}
					/>
					<DayList
						location={location}
						updateResolvedLocation={updateResolvedLocation}
					/>
				</div>
			) : (
				<div>
					<Spinner hexColor='#247490' pixelsSize={155} />
					<p>Retrieving Location</p>
				</div>
			)}
		</div>
	);
}

export default App;
