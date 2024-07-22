<script lang="ts">
    import { setCookie, getCookie } from "svelte-cookie";
    import NavigationBar from "../NavigationBar/NavigationBar.svelte";

    let username = '';
    let email = '';
    let password = '';
    let errorMessage = '';
    let successMessage = '';

    async function handleSubmit(event) {
        event.preventDefault();

// Validasi sederhana (misalnya, pastikan semua input terisi)
if (!email || !password) {
    errorMessage = 'Harap lengkapi semua kolom.';
    return;
}

// Lakukan request POST ke server (ganti URL dengan URL registrasi Anda)
const url = 'https://um.infrasvc.id/v2/login'; // Ganti dengan URL yang sesuai
const data = {email, password };

try {
    const response = await fetch('https://um.infrasvc.id/v2/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Registrasi gagal. Silakan coba lagi.');
    }

    // Reset form dan tampilkan pesan sukses
    email = '';
    password = '';
    successMessage = 'Registrasi berhasil! Silakan login dengan akun baru Anda.';
    errorMessage = '';
} catch (error) {
    errorMessage = error.message || 'Terjadi kesalahan. Silakan coba lagi.';
    successMessage = '';
}
    }
    function handleLoginClick(){
        window.location.href='/Login';
    }
</script>
<NavigationBar/>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');


    .page-wrapper {
        background: #FAEED1; /* Background biru */
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .content {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
    }

    .rectangle-8 {
        border-radius: 20px;
        background-color: #FDF7E4;
        padding: 40px;
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .container-3 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo {
        width: 150px;  /* Ubah nilai ini untuk menyesuaikan ukuran lebar logo */
        height: auto;  /* Menjaga aspek rasio logo */
        margin: 30px;
    }

    .halaman-register-1 {
        margin-bottom: 20px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 24px;
        color: #000000;
        text-align: center;
    }

    .form-label {
        align-self: flex-start;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 14px;
        color: #4D4747;
        margin-bottom: 5px;
    }

    .rectangle-input {
        border-radius: 5px;
        background: #FFFFFF;
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .input-field {
       width: 100%;
        padding: 5px;
        border: none;
        border-radius: 5px;
        background: transparent;
        font-size: 16px;
        color: #000000;
    }

    .error {
        color: red;
        margin-top: 10px;
        font-size: 12px;
    }

    .success {
        color: green;
        margin-top: 10px;
        font-size: 12px;
    }

    .container {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .container-1 {
        border-radius: 5px;
        background: #0078A0;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container-1:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .register-button {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
        background-color: transparent;
        outline: none;
        height: 40px;
    }

    .back-to-login {
        margin-top: 10px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        text-align: center;
        cursor: pointer;
        border: none;
        background: transparent;
        text-decoration: underline;
    }

    .back-to-login:hover {
        color: #0078A0;
    }

    @media (max-width: 768px) {
        .rectangle-8 {
            padding: 20px;
        }

        .input-field {
            font-size: 12px;
        }

        .register-button {
            font-size: 14px;
        }

        .back-to-login {
            font-size: 12px;
        }
    }
</style>

<div class="page-wrapper">
    <div class="content">
        <div class="rectangle-8">
            <div class="container-3">
                <img src="/a_1.png" alt="Logo" class="logo">
                <div class="halaman-register-1">Register</div>
                <form on:submit|preventDefault={handleSubmit}>
                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <div class="rectangle-input">
                            <input type="email" id="email" bind:value={email} class="input-field" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password" class="form-label">Password</label>
                        <div class="rectangle-input">
                            <input type="password" id="password" bind:value={password} class="input-field" />
                        </div>
                    </div>
                    {#if errorMessage}
                        <p class="error">{errorMessage}</p>
                    {/if}
                    {#if successMessage}
                        <p class="success">{successMessage}</p>
                    {/if}
                    <div class="container">
                        <div class="container-1">
                            <button type="submit" class="register-button">Register</button>
                        </div>
                    </div>
                </form>
                <button class="back-to-login" on:click={handleLoginClick}>Back To Login</button>
            </div>
        </div>
    </div>
</div>