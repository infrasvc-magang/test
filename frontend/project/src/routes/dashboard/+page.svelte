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
      window.location.href='/Login';
    }
  });

  function handleGenerateClick() {
    isLoading = true;
    sessionStorage.setItem('inputText', inputText);
    window.location.href = '/Generate'; // Ubah ke URL halaman hasil
  }
  isLoading = false;
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
    100% {inset:0}
}
</style>

{#if isAuthenticated}
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
{:else}
<p>Redirecting to login...</p>
{/if}
