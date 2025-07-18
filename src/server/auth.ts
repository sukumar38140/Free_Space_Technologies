
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from './db';

const router = express.Router();
const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

// User Signup
router.post('/signup', async (req, res) => {
  const { email, password, name, mobile } = req.body;

  if (!email || !password || !name || !mobile) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const [result] = await pool.execute(
      'INSERT INTO users (email, password_hash, name, mobile) VALUES (?, ?, ?, ?)',
      [email, hashedPassword, name, mobile]
    );

    // In a real application, you would generate a unique token and send an
    // email to the user with a verification link.
    const verificationToken = 'fake-verification-token';
    console.log(`Verification link: http://localhost:5173/verify-email?token=${verificationToken}`);

    // In a real application, you would generate a unique code and send it
    // to the user's mobile number.
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(`Verification code for ${mobile}: ${verificationCode}`);

    res.status(201).json({ message: 'User created successfully. Please check your email and mobile to verify your account.' });
  } catch (error) {
    console.error('Signup Error:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'User with this email or mobile already exists' });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password_hash);

    if (match) {
      const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' });
      res.json({ token, user: { id: user.id, email: user.email, name: user.name, profileImage: user.profile_image } });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Admin Login
router.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const [rows] = await pool.execute('SELECT * FROM admin_users WHERE username = ?', [username]);
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const admin = rows[0];
        const match = await bcrypt.compare(password, admin.password_hash);

        if (match) {
            const token = jwt.sign({ id: admin.id, username: admin.username, role: admin.role }, jwtSecret, { expiresIn: '1h' });
            res.json({ token, user: { id: admin.id, username: admin.username, role: admin.role } });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Admin Login Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Password Reset Request
router.post('/request-password-reset', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // In a real application, you would generate a unique token,
  // save it to the database with an expiration date, and send an
  // email to the user with a link to reset their password.
  // For this example, we'll just return a success message.

  console.log(`Password reset requested for email: ${email}`);

  res.status(200).json({ message: 'If an account with that email exists, we have sent a password reset link.' });
});

// Email Verification
router.post('/verify-email', async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ message: 'Token is required' });
    }

    // In a real application, you would verify the token and activate the user's account.
    // For this example, we'll just return a success message.

    console.log(`Email verification requested with token: ${token}`);

    res.status(200).json({ message: 'Email verified successfully.' });
});

// Mobile Verification
router.post('/verify-mobile', async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ message: 'Code is required' });
    }

    // In a real application, you would verify the code and activate the user's account.
    // For this example, we'll just return a success message.

    console.log(`Mobile verification requested with code: ${code}`);

    res.status(200).json({ message: 'Mobile number verified successfully.' });
});


export { router as authRouter };
