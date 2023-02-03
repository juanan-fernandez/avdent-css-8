export const getCurrentLocation = (): Promise<string> => {
	const getOptions: PositionOptions = { enableHighAccuracy: true, timeout: 10000 };
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(position: GeolocationPosition) =>
				resolve(position.coords.latitude + ',' + position.coords.longitude),
			(positionErr: GeolocationPositionError) => reject(positionErr),
			getOptions
		);
	});
};
