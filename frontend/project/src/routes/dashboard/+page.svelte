<script lang="ts">
  import NavigationBar from "../NavigationBar/NavigationBar.svelte";
  import { Button, Form, FormGroup, Input, Container, Row, Col } from '@sveltestrap/sveltestrap';
  import { getCookie } from 'svelte-cookie';
  import { onMount } from 'svelte';

  let isAuthenticated = false;
  let validated = false;
  let inputText = '';
  let isLoading = false;
  let showGif = true;
  let userEmail = '';
  let message = 'You Are Not Logged In!';
  let shouldRedirect = false; // Tambahkan variabel ini

  onMount(() => {
    const tokenString = getCookie('token');
    console.log('Token saat onMount:', tokenString); // Log tambahan
    if (tokenString) {
      try {
        const token = JSON.parse(tokenString);
        isAuthenticated = true;
        console.log('Token ada:', token);
        userEmail = getCookie('email'); // Assuming you store the user's email in a cookie
        console.log('User email:', userEmail);
      } catch (e) {
        console.error('Error parsing token:', e);
        isAuthenticated = false;
      }
    } else {
      console.log('Token tidak ditemukan');
      isAuthenticated = false;
      shouldRedirect = true; // Set this to true to trigger redirect
    }
    
    if (shouldRedirect) {
      redirectToLogin();
    }
  });

  function redirectToLogin() {
    setTimeout(() => {
      window.location.href = '/Login';
    }, 2000);
  }

  async function handleGenerateClick() {
    isLoading = true;
    try {
      const response = await fetch('http://192.168.14.61/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: inputText, email: userEmail })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      sessionStorage.setItem('generateResult', JSON.stringify(data));
      window.location.href = '/Generate';
    } catch (error) {
      console.error('Error:', error);
    } finally {
      isLoading = false;
    }
  }
</script>

<NavigationBar/>

<style>
  .message {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    flex-direction: column;
    background-color: #FAEED1;
    color: #973131;
    font-size: 2rem; 
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5); 

  }
  .centered-form {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    flex-direction: column;
    background-color: #FAEED1;
    color: #000000;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin-top: 1.5rem;
  }

  .loader {
    width: 120px;
    height: 22px;
    border-radius: 20px;
    color: #514b82;
    border: 2px solid;
    position: relative;
  }

  .loader::before {
    content: "";
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation: l6 2s infinite;
  }

  @keyframes l6 {
    100% {
      inset: 0;
    }
  }
</style>

{#if isAuthenticated}
  <div class="centered-form">
    <Container>
      <Row>
        <Col xs="6" class="d-flex justify-content-center align-items-center" style="width: 50%">
          <img src="/folder.gif" style="width: 300px" alt="coding" />
        </Col>
        <Col xs="6" class="d-flex flex-column justify-content-center align-items-center" style="padding: 50px">
          <h3>Make Your PowerPoint Now!</h3>
          <p>Example: Telecommunication Engineering</p>
          <Form {validated} on:submit={(e) => e.preventDefault()}>
            <FormGroup>
              <Input bind:value={inputText} placeholder="Presentation title" style="width: 200px" />
            </FormGroup>
            <div class="button-wrapper">
              {#if isLoading}
                <div class="loader"></div>
              {:else}
                <Button class="centered-button" type="submit" on:click={handleGenerateClick}>Generate</Button>
              {/if}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
{:else if shouldRedirect}
 
  <div class="message">
    <img src="/markk.gif" alt="Not Logged In"/>
    <p>{message}</p>
  </div>
{/if}
