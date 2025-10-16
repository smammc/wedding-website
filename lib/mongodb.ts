import { MongoClient, ServerApiVersion } from 'mongodb';

if (!process.env.DB_PASSWORD || !process.env.DB_USER) {
  throw new Error("Invalid/Missing environment variable: DB_PASSWORD or DB_USER");
}

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@weddingresponses.kzt8pus.mongodb.net/?retryWrites=true&w=majority&appName=WeddingResponses`;

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;