import express from 'express';
import jwt, { decode } from 'jsonwebtoken';
import { authenticateToken } from '../../middleware/auth.js';

const app = express();
app.use(express.json());

const users = [
    { email: 'test@example.com', password: 'password123' }
];

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        const token = jwt.sign({ email: user.email }, 'your-secret-key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Email atau password salah' });
    }
});

// Endpoint yang dilindungi
app.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: 'Selamat datang di halaman home!' });
});

const PORT = 5176;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
