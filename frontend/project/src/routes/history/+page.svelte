<script lang="ts">
    import { onMount } from "svelte";
    import { getCookie } from "svelte-cookie";
    import NavigationBar from "../NavigationBar/NavigationBar.svelte";
    let history = [];
    let isAuthenticated = false;
    let userEmail = '';
  
    onMount(async () => {
      const token = getCookie('token');
      if (token) {
        isAuthenticated = true;
        userEmail = getCookie('email'); // Assuming you store the user's email in a cookie
        await fetchHistory();
      } else {
        isAuthenticated = false;
      }
    });

    async function fetchHistory() {
      try {
        const response = await fetch(`http://192.168.14.61/history?email=${userEmail}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        history = data.history;
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    async function deleteHistory(id) {
        try {
            console.log("Deleting presentation with id:", id);  // Tambahkan ini untuk debug
            const response = await fetch('http://192.168.14.61/delete_history', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
            });
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result.message);
            // Remove deleted item from the history array
            history = history.filter(item => item.id !== id);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    onMount(() => {
        if (isAuthenticated) {
            fetchHistory();
        }
    });
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
    table {
      width: 80%;
      max-width: 800px;
      border-collapse: collapse;
      margin-top: 20px;
      background-color: #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #dddddd;
    }
    th {
      background-color: #0044cc;
      color: white;
    }
    tr:hover {
      background-color: #f2f2f2;
    }
    .delete-button {
      background-color: #ff4d4d;
      color: white;
      border: none;
      padding: 8px 12px;
      cursor: pointer;
      border-radius: 4px;
    }
    .delete-button:hover {
      background-color: #ff1a1a;
    }
  </style>
  <NavigationBar/>
  <div class="container">
    <h2>Your Presentation History</h2>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>ID</th>
          <th>Created At</th>
          <th>Download Link</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {#each history as item}
          <tr>
            <td>{item.title}</td>
            <td>{item.id}</td>
            <td>{new Date(item.created_at).toLocaleString()}</td>
            <td><a href={item.download_link}>Download</a></td>
            <td><button class="delete-button" on:click={() => deleteHistory(item.id)}>Delete</button></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>