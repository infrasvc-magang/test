<script>
  import { onMount } from 'svelte';
  import { Button } from '@sveltestrap/sveltestrap';
  import NavigationBar from "../NavigationBar/NavigationBar.svelte";
  let generateResult = {
    title: '',
    download_link: '',
    created_at: ''
  };
  onMount(() => {
    const result = sessionStorage.getItem('generateResult');
    if (result) {
      const parsedResult = JSON.parse(result);
      generateResult = parsedResult;
    }
  });
  function downloadFile(link) {
    window.location.href = link;
  }
</script>
<style>
  :global(html, body) {
    height: 100%;
    margin: 0;
    background-color: #FAEED1;
    font-family: 'Poppins', sans-serif;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-height: 100vh;
  }
  .results {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 60%;
    text-align: center;
    margin-bottom: 30px;
  }
  .results h2 {
    background-color: #0044cc;
    color: white;
    padding: 10px;
    border-radius: 5px 5px 0 0;
    margin: -20px -20px 20px -20px;
    font-size: 1.2rem;
  }
  .results .topic-box {
    background-color: #f2f2f2;
    padding: 15px;
    border-radius: 10px;
    margin: 20px 0;
    font-size: 1rem;
  }
</style>
<NavigationBar/>
<div class="container">
  <div class="results">
    <h2>Your Generate Results</h2>
    {#if generateResult.title}
      <div class="topic-box">
        <strong>Topic:</strong> {generateResult.title}
      </div>
      <p>PPT berhasil ditambahkan ke history. <a href="/history">Lihat History</a></p>
      <Button color="warning" on:click={() => downloadFile(generateResult.download_link)}>
        Download File
      </Button>
    {/if}
  </div>
</div>
