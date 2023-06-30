<template>
  <div class="align-items-center d-flex">
    <img src="../assets/register.jpg" alt="">
  <div class="h-100 p-5 text-black bg-light rounded-3">
    <form>
      <h1 class="display-6 mb-3 fw-normal">Sign Up</h1>
      <input
        type="text"
        class="form-control mb-3"
        placeholder="First Name"
        required
      />

      <input
        type="text"
        class="form-control mb-3"
        placeholder="Last Name"
        required
      />

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

      <input
        type="password"
        class="form-control mb-3"
        placeholder="Confirm Password"
        required
      />

      <button class="w-100 btn btn-lg mb-2" type="submit">Register</button>

      <label for="login"
        >Already a user? Login
        <router-link class="router-link-text" to="/login">here</router-link
        >!</label
      >
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: "Register",
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