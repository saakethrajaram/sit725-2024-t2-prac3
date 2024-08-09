const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can change this port number

// MongoDB connection
mongoose.connect('mongodb+srv://sakethrajaram:Saketh@189@cluster0.elu6f.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Schema and Model
const inquirySchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    phone_model: String,
    email: String
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

// Routes
app.post('/submit-inquiry', async (req, res) => {
    const { first_name, last_name, phone_model, email } = req.body;
    const newInquiry = new Inquiry({ first_name, last_name, phone_model, email });
    try {
        await newInquiry.save();
        res.status(200).json({ message: 'Inquiry submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting inquiry', error });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
