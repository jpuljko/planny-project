<template>


<!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
   <router-link to="/" class="navbar-brand">Planny</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link to="/admin_home" class="nav-link">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user_home" class="nav-link">User</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Log In</router-link>
        </li>
    </ul>

  </div>
</nav> -->


    <nav class="navbar navbar-expand-lg mb-4">
 
  <div class="container-fluid " id="navbarTogglerDemo02">
    <router-link to="/" class="navbar-brand">Planny</router-link>
    <div>
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <router-link to="/admin_home" class="nav-link">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user_home" class="nav-link">User</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link" id="register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" id="login">Log In</router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
  .navbar-brand {
    color: #fa9746;
    font-size: 35px;
    font-family: 'Lobster', cursive;
  }
  .nav-link {
    color: #79aceb;
    font-family: 'Rubik', sans-serif;
  }

  #login, #register {
    color: #ed7d2b;
  }

</style>