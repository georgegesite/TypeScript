// fetchData.ts

// Function that returns a Promise
export function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        // Simulate success sometimes and failure sometimes
        const random = Math.random();
        if (random < 0.5) {
            setTimeout(() => {
                resolve('Data fetched successfully!');
            }, 2000);
        } else {
            setTimeout(() => {
                reject('Failed to fetch data!');
            }, 2000);
        }
    });
}
