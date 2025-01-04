const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://ninganna2102:ningu2102@expensetracker.0nfbp.mongodb.net/?retryWrites=true&w=majority&appName=expensetracker")
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}