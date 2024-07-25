<script>
  import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from '@sveltestrap/sveltestrap';
  import { getCookie, deleteCookie } from "svelte-cookie";
  import { onMount } from "svelte";

  let isOpen = false;
  let isAuthenticated = false;

  onMount(() => {
    const token = getCookie('token');
    isAuthenticated = !!token;
  });

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
  function handleLoginClick(){
    window.location.href='/Login';
  }
  function handleDashboardClick(){
    window.location.href='/dashboard';
  }
  function handleAboutClick(){
    window.location.href='/About';
  }
  function handleLogoutClick(){
    deleteCookie('token', { path: '/'});
    window.location.href="/";
  }
  function handleHomeClick(){
    window.location.href="/";
  }
  function handleHistoryClick(){
    window.location.href="/history";
  }
</script>

<Navbar style="background-color: #F695C;" light expand="md" container="md">
  <NavbarBrand href="/" style="color: white;">
    <img src="/a_1.png" alt="Logo" style="height: 50px; margin-right: 10px;" />
    Powered by Open AI
  </NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} style="color: white;" />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink on:click={handleHomeClick} style="color: white; margin-left : 3rem">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink on:click={handleDashboardClick} style="color: white; margin-left : 3rem">Dashboard</NavLink>
      </NavItem>
      <NavItem>
        <NavLink on:click={handleAboutClick} style="color: white; margin-left : 3rem">About</NavLink>
      </NavItem>
      {#if isAuthenticated}
      <NavItem>
        <NavLink on:click={handleHistoryClick} style="color: white; margin-left : 3rem">History</NavLink>
      </NavItem>
      <NavItem>
        <NavLink on:click={handleLogoutClick} style="color: white; margin-left : 3rem">Logout</NavLink>
      </NavItem>
      {:else}
      <NavItem>
        <NavLink on:click={handleLoginClick} style="color: white; margin-left : 3rem">Login</NavLink>
      </NavItem>
      {/if}
    </Nav>
  </Collapse>
</Navbar>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  
  :global(.navbar, .navbar-brand, .nav-link, .dropdown-item) {
      font-family: 'Poppins';
  }
  :global(.navbar) {
      background-color: #BBAB8C !important;
  }
  :global(.navbar-brand, .nav-link, .dropdown-toggle) {
      color: white !important;
  }
  :global(.dropdown-item) {
      color: #973131 !important;
  }
  :global(.dropdown-item:hover) {
      background-color: #973131 !important;
      color: white !important;
  }
  
  :global(.nav-link:hover) {
    background-color: #561C24;
  }
</style>
