<script lang="ts">
  import NavigationBar from "../NavigationBar/NavigationBar.svelte";
  import { Button, Form, FormGroup, Input, Container, Row, Col } from '@sveltestrap/sveltestrap';
  import { getCookie } from 'svelte-cookie';
  import { onMount } from 'svelte';

  let isAuthenticated = false;
  let validated = false;
  let inputText = '';
  let isLoading = false;

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

  async function handleGenerateClick() {
    isLoading = true;

    try {
      const response = await fetch('http://127.0.0.1:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: inputText })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      sessionStorage.setItem('generateResult', JSON.stringify(data));
      window.location.href = '/Generate'; // Ubah ke URL halaman hasil
    } catch (error) {
      console.error('Error:', error);
    } finally {
      isLoading = false;
    }
  }
</script>

<NavigationBar/>

<style>
  .centered-form {
    display: flex;
    justify-content: center;
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
    display: inline-flex;
    gap: 10px;
  }
  .loader:before,
  .loader:after {
    content: "";
    height: 20px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(farthest-side, #000 95%, #0000) 50%/8px 8px no-repeat #ff0000;
    animation: l10 1.5s infinite alternate;
  }
  .loader:after {
    --s: -1;
  }
  @keyframes l10 {
    0%, 20% { transform: scaleX(var(--s, 1)) rotate(0deg); clip-path: inset(0); }
    60%, 100% { transform: scaleX(var(--s, 1)) rotate(30deg); clip-path: inset(40% 0 0); }
  }
</style>

<div class="centered-form">
  <Container>
    <Row>
      <Col xs="6" class="d-flex justify-content-center align-items-center" style="width: 50%">
        <img src="/coding.gif" style="width: 300px" alt="coding" />
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
