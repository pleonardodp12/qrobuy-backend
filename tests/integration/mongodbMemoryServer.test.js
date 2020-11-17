import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('insert', () => {
  let mongo;
  let client;
  beforeAll(async () => {
    mongo = new MongoMemoryServer();
    const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    const mongoUri = await mongo.getUri();
    client = await MongoClient.connect(mongoUri, mongoOptions);
  });

  beforeEach(async () => {
    client.db().collection('products');
    await collection.deleteMany({});
  });

  afterAll(async () => {
    await client.close();
  });

  it('should insert a doc into collection', async () => {
    const products = client.db().collection('products');
    const mockProduct = {
      _id: 1,
      name: 'abc',
      description: 'something',
      price: 10000,
      brand: 'generic',
      weight: '10 kg',
      dimensions: '50 x 50 x 50',
      releaseDate: '2010',
    };
    await products.insertOne(mockProduct);

    const insertedProduct = await products.findOne({ _id: 1 });
    expect(insertedProduct).toEqual(mockProduct);
  });
});
