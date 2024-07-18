<script lang="ts">
    import { setCookie, getCookie } from "svelte-cookie";
    import NavigationBar from "../NavigationBar/NavigationBar.svelte";

    let email = '';
    let password = '';
    let errorMessage = '';
    let successMessage = '';

    async function handleSubmit(event) {
        event.preventDefault();

        if (!email || !password) {
            errorMessage = 'Email dan password tidak boleh kosong.';
            return;
        }

        try {
            const response = await fetch('https://um.infrasvc.id/v2/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const token = await response.json();
                console.log(JSON.stringify(token));
                setCookie('token', token, {
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
    function handleRegisterClick(){
    window.location.href='/Register';
  }
</script>
<NavigationBar/>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

    .halaman-login {
        background: #FAEED1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 70px);
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
        margin: 30px;
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
        background: #758694; /* Warna sesuai dengan gambar */
        margin-bottom: 15px;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .input-field {
        width: 100%;
        padding: 5px;
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
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .container-1{
        border-radius: 5px;
        background: #009FBD;
        width: 45%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login{
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
        background-color: transparent;
        outline: none;
        height: 40px;
        border: none; /* Hilangkan border */
        outline: none; /* Hilangkan outline */
        padding: 0; /* Hilangkan padding */
        cursor: pointer; /* Ubah cursor menjadi pointer untuk menandakan bisa diklik */
    }
    .sign-up{
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
    .sign-up:hover{
        color: #0078A0;
    }
</style>

<div class="halaman-login">
    <div class="rectangle-8">
        <div class="container-3">
            <img src="/a_1.png" alt="Logo" class="logo">
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
                </div>
            </form>
            <div>
                Don't have an account yet?
                <button class="sign-up" on:click={handleRegisterClick}>Sign Up</button>
            </div>
        </div>
    </div>
</div>