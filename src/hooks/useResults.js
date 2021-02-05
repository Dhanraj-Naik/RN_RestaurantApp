import { useState, useEffect } from 'react';
import yelp from '../api/yelp';



export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        console.log('searchAPI: ', searchTerm);
        try {
            const response = await yelp.get('./search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    // location: 'san jose',
                    location: 'usa',
                },
            });
            console.log('api succ: ', response.data.businesses);
            setErrorMessage('');
            setResults(response.data.businesses);
        } catch (error) {
            console.log('api error: ', error);
            setErrorMessage('Something went wrong');
        }
    };

    useEffect(() => {
        searchAPI('pizza');
    }, []);

    return [searchAPI, results, errorMessage];

}