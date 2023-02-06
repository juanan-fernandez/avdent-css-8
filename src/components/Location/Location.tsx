import { useRef } from 'react';

import './Location.css';

interface LocationProps {
	updateLocation(l: string): void;
	locationDescription: string;
}

const Location = ({ updateLocation, locationDescription }: LocationProps) => {
	const locationRef = useRef<HTMLInputElement | null>(null);

	const handleSearchLocation = (ev: React.MouseEvent<HTMLButtonElement>) => {
		if (locationRef.current) {
			updateLocation(locationRef.current.value);
			locationRef.current.value = '';
		}
	};

	return (
		<section className='search'>
			<div className='search__location'>
				<p>Enter city/town:</p>{' '}
				<input ref={locationRef} type='text' name='location' />
				<button onClick={handleSearchLocation}>Search</button>
				<p className='search__resolvedlocation'>{locationDescription}</p>
			</div>
		</section>
	);
};

export default Location;
