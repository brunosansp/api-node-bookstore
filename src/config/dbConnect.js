import mongoose from 'mongoose';
import config from '../../config.json' assert { type: 'json' };

const { urlConnection } = config.database;
mongoose.connect(urlConnection);

let db = mongoose.connection;

export default db;