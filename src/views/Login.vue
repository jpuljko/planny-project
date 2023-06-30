<template>
  <div class="d-inline-flex align-items-center">
    <img src="../assets/login.jpg" alt="">
    <div class="h-100 p-5 text-black bg-light rounded-3">
      <form>
        <h1 class="display-6 mb-3 fw-normal">Welcome back!</h1>

        <input
          type="email"
          class="form-control mb-3"
          placeholder="Email"
          required
        />

        <input
          type="password"
          class="form-control mb-3"
          placeholder="Password"
          required
        />

        <button class="w-100 btn btn-lg mb-2" type="submit">Log In</button>

        <label for="login"
          >Not yet a user? Register
          <router-link class="router-link-text" to="/register">here</router-link
          >!</label
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.btn {
  background-color: #fa9746;
}

.router-link-text {
  color: #fa9746;
}


</style>