/**
 * Sets up an Express server with a /api/users route.
 * The route makes a request to jsonplaceholder to get mock user data,
 * returns the data as JSON to the client, and logs it to the console.
 * Handles any errors by logging to console and returning a 500 status.
 * Server listens on port 3000.
 */
import express from "express";
import axios from "axios";

const app = express();

app.get("/api/users", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

//npm run build to compile
//npm run start to run
