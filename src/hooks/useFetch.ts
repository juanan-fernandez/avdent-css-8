import { useState, useEffect } from 'react';

export type HttpHookResponse = {
	data: any;
	loading: boolean;
	error: string | null;
};

export function useFetch<T>(url: string): HttpHookResponse {
	const [data, setData] = useState<any>(null);
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
