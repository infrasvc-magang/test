<script lang="ts">
  import NavigationBar from "../NavigationBar/NavigationBar.svelte";
  import { Button, Form, FormGroup, Input, Container, Row, Col } from '@sveltestrap/sveltestrap';
  import { getCookie } from 'svelte-cookie';
  import { onMount } from 'svelte';

  let isAuthenticated = false;
  let validated = false;
  let inputText = '';

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
    sessionStorage.setItem('inputText', inputText);
    window.location.href = '/Generate'; // Ubah ke URL halaman hasil
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
            <Button class="centered-button" type="submit" on:click={handleGenerateClick}>Generate</Button>
          </div>
        </Form>
      </Col>
    </Row>
  </Container>
</div>
