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

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
  function handleLoginClick(){
    window.location.href='/Login';
  }
  function handleHomeClick(){
    window.location.href='/';
  }
  function handleAboutClick(){
    window.location.href='/About';
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
        <NavLink on:click={handleHomeClick} style="color: white;">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink on:click={handleAboutClick} style="color: white; margin-left : 3rem">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink on:click={handleLoginClick} style="color: white; margin-left : 3rem">Login</NavLink>
      </NavItem>
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
