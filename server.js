const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./ResolutionRoutes')
const cors = require('cors');

require('dotenv').config();
mongoose.set('strictQuery', false);

const PORT = process.env.PORT || 8000; 
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGODB_LINK) 
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//nesterovahanna
//MJa3Frgckao7b6Mc
//mongodb+srv://nesterovahanna:<password>@resolutions-data.imievqt.mongodb.net/?retryWrites=true&w=majority&appName=resolutions-data