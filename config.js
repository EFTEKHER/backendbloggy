const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: 'mongodb+srv://eftekherali2000:efte2000@cluster0.dsn9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  JWT_SECRET: process.env.JWT_SECRET || "qA1RtWLPAnQBrJKSUkI97qiouPUq/N+xf+2p2B3ch6M",
};
