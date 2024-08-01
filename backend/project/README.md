# PowerPoint Material Maker using GPT

Bagian backend dari proyek web development yang menggunakan GPT untuk membuat materi presentasi PowerPoint. Aplikasi ini memungkinkan pengguna untuk menghasilkan presentasi, melihat riwayat presentasi, dan menghapus presentasi yang sudah tidak diperlukan.

## Fitur
- Membuat presentasi PowerPoint berdasarkan input pengguna.
- Mendownload presentasi yang telah dibuat.
- Menampilkan tabel riwayat pembuatan presentasi.
- Menghapus presentasi dari tabel riwayat.
- Mencari presentasi berdasarkan judul.
- Memilih untuk memperbarui atau membuat baru jika presentasi sudah pernah dibuat.

## Prasyarat
Sebelum menjalankan aplikasi, pastikan Anda telah menginstal dependensi yang diperlukan dan memiliki API key dari OpenAI.

### 1. Instalasi Dependensi
1.1. Install dependensi yang dibutuhkan:
```bash
pip install openai
pip install python-pptx
pip install flask
pip install flask-sqlalchemy
pip install flask-cors
pip install pytz
```

1.2. Dapatkan API key dari OpenAI dan simpan untuk digunakan di aplikasi.

## Menjalankan Aplikasi Secara Lokal

### 2. Menyiapkan Proyek
2.1. Clone repositori ke lokal:
```bash
git clone https://github.com/infrasvc-magang/test-Internship-July2024.git
```

2.2. Pindah ke direktori proyek:
```bash
cd test-Internship-July2024/backend/project
```

### 3. Menjalankan Aplikasi
3.1. Jalankan aplikasi dengan perintah berikut:
```bash
python app.py
```

3.2. Buka alamat yang diberikan di browser untuk mengakses aplikasi.

##
Dokumentasi ini bertujuan untuk memberikan panduan lengkap tentang cara menginstal dan menjalankan aplikasi.
