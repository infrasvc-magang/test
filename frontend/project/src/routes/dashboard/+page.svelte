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
    color : #000000;
  }


  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin-top: 1.5rem; /* Adjusts the button position to overlap the input */
  }

/* HTML: <div class="loader"></div> */
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
  background:
    radial-gradient(farthest-side,#000 95%,#0000) 50%/8px 8px no-repeat
    #ff0000;
  aspect-ratio: 1;
  animation: l10 1.5s infinite alternate;
}
.loader:after {
  --s:-1;
}
@keyframes l10 {
  0% ,20% {transform:scaleX(var(--s,1)) rotate(0deg) ;clip-path:inset(0)}
  60%,100%{transform:scaleX(var(--s,1)) rotate(30deg);clip-path:inset(40% 0 0)}
}
</style>

<div class="centered-form">
  <Container>
    <Row>
      <Col xs="6" class="d-flex justify-content-center align-items-center" style="width : 50%">
        <img src="/coding.gif" style="width: 300px" alt="coding" />
      </Col>
      <Col xs="6" class="d-flex flex-column justify-content-center align-items-center" style="padding: 50px">
        <h3>Make Your PowerPoint Now!</h3>
        <p>Example : Telecommunication Engineering</p>
        <Form {validated} on:submit={(e) => e.preventDefault()}>
          <FormGroup>
            <Input placeholder="Presentation title" value={inputText} style=" width:200px"/>
          </FormGroup>
          <div class="button-wrapper">
            {#if isLoading}
              <div class="loader"></div> <!-- Tampilkan spinner saat isLoading true -->
              {:else}
              <Button class="centered-button" type="submit" on:click={handleGenerateClick}>Generate</Button>
              {/if}
          </div>
        </Form>
      </Col>
    </Row>
  </Container>
</div>

