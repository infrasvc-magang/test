<script lang="ts">
    import { setCookie, getCookie } from "svelte-cookie";
    import { onMount } from "svelte";

    let email = '';
    let password = '';
    let errorMessage = '';
    let successMessage = '';

    let registeredEmail = '';
    let registeredPassword = '';

    async function handleSubmit(event) {
        event.preventDefault();

        if (!email || !password) {
            errorMessage = 'Email dan password tidak boleh kosong.';
            return;
        }

        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                setCookie('token', data.access_token, {
                    path: '/',
                    sameSite: 'strict',
                    secure: true,
                    expires: 7
                });
                window.location.href = '/dashboard';
            } else {
                const data = await response.json();
                errorMessage = data.message;
            }
        } catch (error) {
            errorMessage = 'Login gagal, silakan coba lagi';
        }
    }

    function handleRegister() {
        setCookie('registeredEmail', email, { path: '/' });
        setCookie('registeredPassword', password, { path: '/' });
        successMessage = 'Registrasi berhasil!';
        registeredEmail = email;
        registeredPassword = password;

        const storedEmail = getCookie('registeredEmail');
        const storedPassword = getCookie('registeredPassword');
    }

    onMount(() => {
        const storedEmail = getCookie('registeredEmail');
        const storedPassword = getCookie('registeredPassword');
        if (storedEmail && storedPassword) {
            email = storedEmail;
            password = storedPassword;
        }
    });
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

    .halaman-login {
        background: #004AAD;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
    }

    .rectangle-8 {
        border-radius: 20px;
        background: #ECECEC;
        padding: 40px;
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container-3 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo {
        width: 150px;  /* Ubah nilai ini untuk menyesuaikan ukuran lebar logo */
        height: auto;  /* Menjaga aspek rasio logo */
        margin-bottom: 20px;
    }

    .halaman-login-1 {
        margin-bottom: 20px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 24px;
        color: #000000;
        text-align: center;
    }

    .email, .password {
        align-self: flex-start;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #4D4747;
        margin-bottom: 10px;
    }

    .rectangle-9, .rectangle-10 {
        border-radius: 5px;
        background: #A56333; /* Warna sesuai dengan gambar */
        margin-bottom: 20px;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .input-field {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background: transparent;
        font-size: 16px;
        color: #FFFFFF;
    }

    .error {
        color: red;
        margin-top: 10px;
    }

    .success {
        color: green;
        margin-top: 10px;
    }

    .container {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .container-1, .container-2 {
        border-radius: 5px;
        background: #004AAD;
        width: 45%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login, .register {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
    }
</style>

<div class="halaman-login">
    <div class="rectangle-8">
        <div class="container-3">
            <img src="/src/routes/assets/A.png" alt="Logo" class="logo">
            <div class="halaman-login-1">Halaman Login</div>
            <form on:submit|preventDefault={handleSubmit}>
                <div class="form-group">
                    <label for="email" class="email">Email</label>
                    <div class="rectangle-9">
                        <input type="email" id="email" bind:value={email} class="input-field" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="password">Password</label>
                    <div class="rectangle-10">
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
                        <button type="submit" class="login">Login</button>
                    </div>
                    <div class="container-2">
                        <button type="button" class="register" on:click={handleRegister}>Register</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
