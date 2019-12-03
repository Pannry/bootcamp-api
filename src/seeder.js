const fs = require('fs');
const mongoose = require('mongoose');
const dotenvPath = `${__dirname}\\config\\config.env`
const dotenv = require('dotenv').config({ path: dotenvPath });

const Bootcamp = require('./models/Bootcamp');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}\\_data\\bootcamps.json`), 'utf-8');

const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    console.log('data imported');
    process.exit();
  } catch (error) {
    console.error(err)
  }
}


const DeleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    console.log('data deleted');
    process.exit();
  } catch (error) {
    console.error(err)
  }
}

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  DeleteData();
}