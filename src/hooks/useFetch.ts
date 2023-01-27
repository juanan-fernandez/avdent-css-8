import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
	const [data, setData] = useState<[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		async function fetchData() {
			let data: [] = [];
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(
						`ERROR: ${response.status} => No se ha podido realizar la consulta a la API`
					);
				}
				data = await response.json();
				setData(data);
			} catch (error: any) {
				setError(
					error.message || 'ERROR: No se ha podido realizar la consulta a la API(2)'
				);
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, [url]);

	return { data, loading, error };
}

//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ALICANTE/next7days?unitGroup=metric&key=WPSBB3AZ7SEYL2L3LUPVQQXPN&contentType=json

//const apiKey = process.env.REACT_APP_RAWG_APIKEY;
//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/alicante/next7days?unitGroup=metric&key=YOUR_API_KEY&contentType=json
