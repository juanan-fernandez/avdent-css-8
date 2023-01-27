import './App.css';
import { useState } from 'react';
import DayList from './components/DayList/DayList';
import Location from './components/Location/Location';

function App() {
	const [location, setLocation] = useState<string>('');
	const updateLocation = (locationToSearch: string): void => {
		setLocation(locationToSearch);
	};
	return (
		<div className='App'>
			<Location updateLocation={updateLocation} />
			<DayList location={location} />
		</div>
	);
}

export default App;
