
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'webapp_user',
  password: 'secure_password',
  database: 'techcorp_solutions',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export const connectToDatabase = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to the database!');
    connection.release();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export default pool;
