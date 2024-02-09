const express = require("express");
const app = express();
require('dotenv').config();

const ENV_PORT = process.env.PORT || 8000; 

app.get('/', (req, res) => {
   res.send('<h1>Welcome to My Page</h1>');
});

app.get('/Facebook', (req, res) => {
   res.send('<h1>Welcome to My FaceBook Page</h1>');
});

app.listen(ENV_PORT, () => { 
   console.log(`Server is running on port ${ENV_PORT}`);
});
