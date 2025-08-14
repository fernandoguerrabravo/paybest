import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || ''; // Asegúrate de poner tu URI en .env
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
