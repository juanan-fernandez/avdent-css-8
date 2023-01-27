import { useRef } from 'react';
import './Location.css';

interface LocationProps {
	updateLocation(l: string): void;
}

const Location = ({ updateLocation }: LocationProps) => {
	const locationRef = useRef<HTMLInputElement | null>(null);

	const handleSearchLocation = (ev: React.MouseEvent<HTMLButtonElement>) => {
		if (locationRef.current) {
			console.log('in location.tsx', locationRef.current.value);
			updateLocation(locationRef.current.value);
		}
	};

	return (
		<section className='search'>
			<div className='search__current'>
				<p>Get your current location</p>
				<button onClick={event => console.log(event)}> Get it!</button>
			</div>
			<div className='search__location'>
				<p>or enter a location here:</p>{' '}
				<input ref={locationRef} type='text' name='location' />
				<button onClick={handleSearchLocation}>Search</button>
			</div>
		</section>
	);
};

export default Location;

//conditions	"Partially cloudy"->partly-cloudy
//conditions	"Clear" -> sunny
//conditions	"Rain, Partially cloudy"->rainy
//conditions	"Overcast" ->cloudy
//conditions	"Snow, Rain, Partially cloudy"->snowy
//conditions	"stormstrong, stormpossible, type_37, type_38" -> stormy
