import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

// Route file
const bootcamps = require('./routes/bootcamps')

// carregando env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// dev loggin middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

export default app;