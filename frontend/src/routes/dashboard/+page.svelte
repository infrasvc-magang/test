<script lang="ts">
  import { getCookie } from 'svelte-cookie';
  import { onMount } from 'svelte';

  let isAuthenticated = false;

  onMount(() => {
      const token = getCookie('token');
      if (token) {
          console.log('Token ada:', token);
          isAuthenticated = true;
      } else {
          console.log('Token tidak ditemukan');
          isAuthenticated = false;
      }
  });
</script>

<main>
  {#if isAuthenticated}
      <h1>login berhasil!</h1>
  {:else}
      <h1>Silakan login terlebih dahulu!</h1>
  {/if}
</main>
<div class="prompt">
  <div class="rectangle-3">
  </div>
  <div class="container-3">
    <div class="container-2">
      <div class="powered-by-open-ai">
        Powered by OpenAI
      </div>
      <div class="group-1">
        <button class="beranda">
          Beranda
        </button>
        <button class="layanan">
          Layanan
        </button>
        <button class="fitur">
          Fitur
        </button>
      </div>
      <button class="profile">
        Profile
      </button>
      <div class="container">
        <button class="logout" onclick="window.location.href='/'">
        logout
        </button>
    </div>
    </div>
    <div class="ai-presentation-maker-generate-presentations-instantly">
      AI Presentation Maker - <br />
      Generate Presentations Instantly
    </div>
    <div class="ppt-image">
      <div class="rectangle-4">
      </div>
    </div>
    <button class="container-1">
      <span class="generate-apersentation-with-ai">
        Generate a persentation with AI
      </span>
    </button>
  </div>
  <div class="a-1">
  </div>
</div>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contoh Penggunaan Google Fonts</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
  <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap)
</style>
</head>
</html>


<style>
.prompt {
  background: #FFFFFF;
  display: flex;
  width: 1366px;
  box-sizing: border-box;
}
.prompt .a-1 {
  background: url('src/routes/assets/a_1.png') 50% / cover no-repeat;
  position: absolute;
  left: 27px;
  top: -27px;
  width: 150px;
  height: 163px;
}
.prompt .powered-by-open-ai {
  margin: 2.5px 15px 1.5px 0;
  display: inline-block;
  width: 249px;
  overflow-wrap: break-word;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 20px;
  color: #9F5600;
}
.prompt .beranda {
  margin: 0 13.5px 1px 0;
  display: inline-block;
  width: 136px;
  overflow-wrap: break-word;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 18px;
  color: #000000;
}
.prompt .layanan {
  margin-bottom: 1px;
  display: inline-block;
  overflow-wrap: break-word;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 18px;
  color: #000000;
}
.prompt .fitur {
  margin-top: 1px;
  display: inline-block;
  overflow-wrap: break-word;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 18px;
  color: #000000;
}
.prompt .logout {
  overflow-wrap: break-word;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 20px;
  color: #FFF9F9;
}
.prompt .profile {
  margin: 2.5px 0 1.5px 0;
  display: inline-block;
  overflow-wrap: break-word;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 20px;
  color: #000000;
}
.prompt .group-1 {
  margin: 4px 0 2px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 346px;
  height: fit-content;
  box-sizing: border-box;
}
.prompt .rectangle-3 {
  background: #004AAD;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  height: 100%;
}
.prompt .rectangle-4 {
  border-radius: 11px;
  border: 1px solid #000000;
  background: url('src/routes/assets/rectangle_4.png') 50% / cover no-repeat;
  width: 415.7px;
  height: 173.5px;
}
.prompt .ai-presentation-maker-generate-presentations-instantly {
  margin: 0 0 48px 20px;
  display: inline-block;
  text-align: center;
  overflow-wrap: break-word;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 26px;
  color: #FFFFFF;
}
.prompt .generate-apersentation-with-ai {
  overflow-wrap: break-word;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 20px;
  color: #FFFAFA;
}
.prompt .ppt-image {
  border-radius: 15px;
  background: #FFFFFF;
  position: relative;
  margin: 0 0 93px 3px;
  display: flex;
  padding: 9.8px 13.7px;
  width: 443px;
  height: 193px;
  box-sizing: border-box;
}
.prompt .container {
  background: #004AAD;
  position: relative;
  display: flex;
  padding: 1.5px 12.4px 2.5px 9.4px;
  box-sizing: border-box;
}
.prompt .container-1 {
  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  background: #39A0EB;
  position: relative;
  display: flex;
  padding: 25px 28.4px 24px 28.3px;
  box-sizing: border-box;
}
.prompt .container-2 {
  background: #FFFFFF;
  position: relative;
  margin-bottom: 93px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 37px 111px 37px 0;
  width: 1366px;
  box-sizing: border-box;
}
.prompt .container-3 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1366px;
  height: fit-content;
  box-sizing: border-box;
}
</style>