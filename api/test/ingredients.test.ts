import { Ingredient } from '../src/db/models/ingredients.mongo';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { expect } from 'chai';

let mongoServer;
describe('Ingredient tests', () => {
    before(async () => {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        await mongoose.connect(mongoUri);
    });

    after(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    afterEach(async () => {
        const collections = mongoose.connection.collections;
        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany({});
        }
    });

    it('can be created correctly', async () => {
        await Ingredient.create({
            title: 'Test title',
        });

        // find inserted ingredient by title
        const postInDb = await Ingredient.findOne({ title: 'Test title' }).exec();

        // check that title is as expected
        expect(postInDb.title).to.equal('Test title');
    });
});
