const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const errorHandler = require('./src/middleware/error');
const connectDB = require('./src/config/db');

// carregando env vars
dotenv.config({ path: './src/config/config.env' });

connectDB();

// Route file
const bootcamps = require('./src/routes/bootcamps')

const app = express();

//body parser
app.use(express.json())

// dev loggin middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// Handle unhandle promises rejections
process.on('unhandledRejection', (err, promisse) => {
  console.log(`error: ${err.message}`);
  // Close aplication on error
  server.close(() => process.exit(1));
})

// Comentario