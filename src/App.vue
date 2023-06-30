<template>
  <Nav />

  <main class="form-signin">
    <router-view />
  </main>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: { Nav },
};
</script>

<style>

.form-signin {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn {
  background-color: #22333B;
  color: white;
}

.router-link-text {
  color: #0b2027;
}
</style>
