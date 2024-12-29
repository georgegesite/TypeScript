// Function returning a promise
function fetchData(): Promise<string> {
	return new Promise((resolve, reject) => {
		// Simulating an asynchronous operation
		// (e.g., fetching data)
		setTimeout(() => {
			const data = "Async data has been fetched!";
			resolve(data);
		}, 1000);
	});

}

// Asynchronous function using async/await
async function fetchDataAsync() {
	try {
		const result = await fetchData();
		console.log(result);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

// Call the asynchronous function
fetchDataAsync();
