import { Ingredient } from '../src/db/models/ingredients.mongo';
import {
    listAllIngredients,
    addNewIngredient,
    existsIngredient,
} from '../src/db/models/ingredients.models';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { expect } from 'chai';

let mongoServer: MongoMemoryServer;

describe('Ingredient tests', () => {
    describe('Model functions tests', () => {
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

        it('addNewIngredient: can be created correctly', async () => {
            await addNewIngredient({ title: 'First test' });
            const ingInDb = await Ingredient.findOne({ title: 'First test' }).exec();

            expect(ingInDb.title).to.equal('First test');
        });

        it('existsIngredient: returns found ingredient', async () => {
            await Ingredient.create({
                title: 'Second test',
            });

            const ingInDb = await existsIngredient({
                title: 'Second test',
            });

            expect(ingInDb[0]).to.have.property('title', 'Second test');
        });
        it('existsIngredient: returns null when it does not exist', async () => {
            const ingInDb = await existsIngredient({
                title: 'Third test',
            });

            expect(ingInDb).to.be.a('Array');
            expect(ingInDb[0]).to.be.a('undefined');
        });

        it('listAllIngredients: should return a list of created ingredients', async () => {
            await Ingredient.insertMany([
                { title: 'Apple' },
                { title: 'Banana' },
                { title: 'Coconut' },
            ]);
            const allIngInDb = await listAllIngredients();
            expect(allIngInDb).to.be.a('Array');
            expect(allIngInDb[0].title).to.be.equal('Apple');
            expect(allIngInDb[1].title).to.be.equal('Banana');
            expect(allIngInDb[2].title).to.be.equal('Coconut');
        });
    });
});
