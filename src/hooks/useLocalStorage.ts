import { useState } from 'react';

export const useLocalStorage = (key: string, value: unknown): [Function, unknown] => {
	const [storedValue, setStoredValue] = useState<unknown>(() => {
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : value;
		} catch (error) {
			// If error also return initialValue
			console.log(error);
			return value;
		}
	});

	const setValue = (value: unknown) => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [setValue, storedValue];
};
