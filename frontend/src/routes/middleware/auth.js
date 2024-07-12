import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // Jika token tidak ada, kirim status 401

    jwt.verify(token, 'your-secret-key', (err, user) => {
        if (err) return res.sendStatus(403); // Jika verifikasi token gagal, kirim status 403
        req.user = user;
        next(); // Jika verifikasi token berhasil, lanjutkan ke middleware atau route handler berikutnya
    });
}
