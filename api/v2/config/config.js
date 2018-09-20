import dotenv from 'dotenv';

dotenv.config();
const config = {
  development: {
    database: process.env.DATABASE_URL,
  },
  test: {
    user: process.env.DATABASE_URL_TEST,
  }
};
export default config;