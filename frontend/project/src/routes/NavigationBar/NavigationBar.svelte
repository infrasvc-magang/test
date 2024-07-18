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
    function handleRegisterClick(){
      window.location.href='/Register';
    }
  </script>
  
  <Navbar style="background-color : transparent" light expand="md" container="md">
    <NavbarBrand href="/">
      <img src="/a_1.png" alt="Logo" style="height: 30px; margin-right: 10px;" />
      Powered by Open AI</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        <NavItem>  
          <NavLink on:click={handleHomeClick}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink on:click={handleAboutClick}>About</NavLink>
        </NavItem>
        <Dropdown nav inNavbar>
          <DropdownToggle nav caret>Menu</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem on:click={handleLoginClick}>Login</DropdownItem>
            <DropdownItem on:click={handleRegisterClick}>Register</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Collapse>
  </Navbar>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
    
    :global(.navbar, .navbar-brand, .nav-link, .dropdown-item) {
        font-family: 'Poppins';
    }
    
   
</style>

