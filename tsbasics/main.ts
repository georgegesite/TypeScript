// main.ts

// Import the fetchData function from the fetchData.ts file
import { fetchData } from './fetchData';

// Async function that uses await with the Promise
async function fetchDataAsync() {
    try {
        console.log('Fetching data...');
        const result = await fetchData(); // Await for the promise to resolve
        console.log(result); // Once resolved, log the result
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the async function
fetchDataAsync();
