"use strict";
// fetchData.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
// Function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulate success sometimes and failure sometimes
        const random = Math.random();
        if (random < 0.5) {
            setTimeout(() => {
                resolve('Data fetched successfully!');
            }, 2000);
        }
        else {
            setTimeout(() => {
                reject('Failed to fetch data!');
            }, 2000);
        }
    });
}
exports.fetchData = fetchData;
