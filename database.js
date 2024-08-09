const { MongoClient } = require('mongodb');

// Replace the URI with your actual MongoDB URI
const uri = 'mongodb+srv://sakethrajaram:Saketh@189@cluster0.elu6f.mongodb.net/'; // Example: 'mongodb://username:password@localhost:27017/phone_exhibition'

// Create a new MongoClient
const client = new MongoClient(uri);

const dbName = 'phone_exhibition';
const collectionName = 'inquiries';

async function connectDB() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to MongoDB.');

        // Select the database
        const db = client.db(dbName);

        // Create or access the collection
        const collection = db.collection(collectionName);

        return { db, collection };
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports = connectDB;