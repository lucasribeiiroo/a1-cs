const mongoose = require('mongoose');

// Mudar string de conexão conforme DB Atlas

const URI ="mongodb+srv://admin:123@cluster0.n6vr2.mongodb.net/a1-cs?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('Conectado ao banco!');
};

module.exports = connectDB;
