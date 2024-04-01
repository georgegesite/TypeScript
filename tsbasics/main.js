"use strict";
// main.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the fetchData function from the fetchData.ts file
const fetchData_1 = require("./fetchData");
// Async function that uses await with the Promise
function fetchDataAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Fetching data...');
            const result = yield (0, fetchData_1.fetchData)(); // Await for the promise to resolve
            console.log(result); // Once resolved, log the result
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    });
}
// Call the async function
fetchDataAsync();
