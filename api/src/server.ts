import http from 'http';

import { mongoConnect } from './services/mongo.js';
import { seedIngredients } from './db/seeders/ingredients.seeder.js';

import { app } from './app.js';

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await seedIngredients();

    server.listen(PORT, () => {
        console.log(`Listening on port http://localhost:${PORT}/v1`);
    });
}

startServer();
