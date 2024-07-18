<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '@sveltestrap/sveltestrap';
  import NavigationBar from "../NavigationBar/NavigationBar.svelte";

  let inputText = '';

  onMount(() => {
    inputText = sessionStorage.getItem('inputText') || '';
  });
</script>

<style>
  :global(html, body) {
    height: 100%;
    margin: 0;
    background-color: #FAEED1; 
    font-family: 'Poppins', sans-serif; /* Menggunakan font Poppins */
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: 'Poppins', sans-serif; /* Menggunakan font Poppins */
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
  .history-table {
    width: 80%;
    border-collapse: collapse;
    margin-top: 20px;
    text-align: center;
  }
  .history-table th, .history-table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  .history-table th {
    background-color: #d4a053;
    color: white;
  }
  .history-table td {
    background-color: #ffffff;
  }
</style>

<NavigationBar/>

<div class="container">
  <div class="results">
    <h2>Your Generate Results</h2>
    <div class="topic-box">
      <strong>Topic:</strong> {inputText}
    </div>
    <Button color="warning">Download PPT</Button>
  </div>
  <table class="history-table">
    <thead>
      <tr>
        <th>History</th>
        <th>Download</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <!-- Add rows here -->
      <tr>
        <td>Example History 1</td>
        <td><Button color="primary">Download</Button></td>
        <td>2024-07-18</td>
      </tr>
      <tr>
        <td>Example History 2</td>
        <td><Button color="primary">Download</Button></td>
        <td>2024-07-17</td>
      </tr>
    </tbody>
  </table>
</div>
