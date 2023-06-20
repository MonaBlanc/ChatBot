const express = require('express');
const connectDB = require('./database/connection');
const cors = require('cors');

require('dotenv').config({ path: "./.env" });
const PORT = process.env.SERVER_PORT || 4000;
// create express instance
const app = express();
app.use(express.json());
app.use(cors());

// database connection
connectDB();

// routes
app.use('/api', require('./router/router'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


