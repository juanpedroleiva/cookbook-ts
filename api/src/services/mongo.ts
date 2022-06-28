import 'dotenv/config';
import mongoose from 'mongoose';

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;
const URL = process.env.MONGO_URL;

const MONGO_URL = `mongodb+srv://${USER}:${PASSWORD}@${URL}?retryWrites=true&w=majority`;

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

export async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
    return;
}

export async function mongoDisconnect() {
    await mongoose.disconnect();
    return;
}
