import express from 'express';
import axios from 'axios';

const app = express();

app.get('/api/users', async (req, res) => {

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    res.json(response.data);
    console.log(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error'); 
  }
  

});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
