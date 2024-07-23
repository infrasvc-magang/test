# About

**Masih dalam pengembangan**. Sudah mengintegrasikan frontend ke backend dengan fetch, tetapi belum dalam server produksi.

Notes: yang penting fungsinya sudah ada, nanti ketika frontend dan backend sudah dideploy ke server produksi tinggal alamat backend pada fetch diganti.

## How to Use:


### 1. Requirements.

#### Requirements Backend.
install python: https://www.python.org/downloads/
install pip: `python get-pip.py`
install beberapa library yg diperlukan:
```
pip install openAI
pip install python-pptx
pip install flask
pip install flask_sqlalchemy
pip install flask-cors
```

#### Requirements Frontend.
install node js dan npm: https://nodejs.org/en/download/package-manager


### 2. Clone repository.
```
git clone https://github.com/infrasvc-magang/test-Internship-July2024.git
```

### 3. Menjalankan Server Frontend (masih server pengembangan).
pada command prompt / terminal VScode:
```
cd ...\test-Internship-July2024\frontend\project
npm install
npm run dev
```
Jika tidak bisa menggunakan npm bisa gunakan yarn

### 4. Menjalankan Server Backend (masih server pengembangan).
pada command prompt / terminal VScode:
```
cd ...\test-Internship-July2024\backend\project
python app.py
```

### 5. Coba buat ppt untuk mengetes apakah frontend berhasil mengirim data ke backend maupun sebaliknya.
- Buka alamat server backend dan frontend
- Input judul ppt di frontend, lihat respons server.

