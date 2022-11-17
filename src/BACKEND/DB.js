const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://kim:<password>@cluster0.yxdamie.mongodb.net/?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
    };
    
    const client = new mongoClient(url);
    try {
        await client.connect();
        const db = client.db();
        const result = await db.collection('products').insertOne(newProduct);
    } catch (error) {
        return res.json({ message: 'Could not store data.' });
    }
    
    client.close();
    res.json(newProduct);
}

const getProduct = async (req, res, next) => {
    const productId = req.params.pid;
    const client = new mongoClient(url);
    let product;
    try {
        await client.connect();
        const db = client.db();
        product = await db.collection('products').findOne({ _id: productId });
    } catch (error) {
        return res.json({ message: 'Could not find product.' });
    }
    
    client.close();
    res.json(product);
}