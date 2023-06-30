<template>
<div class="card" id="card-main">
  <div class="card-body">
  <p class="display-6">Create a guest</p>
  <label htmlFor="exampleInputEmail1">First Name</label>
  <input type="text" class="form-control" placeholder="Ex. John" aria-label="First name">

  <label htmlFor="exampleInputEmail1" class="mt-2">Last name</label>
  <input type="text" class="form-control" placeholder="Ex. Smith" aria-label="Last name">

  <label htmlFor="exampleInputEmail1" class="mt-2">Description</label>
  <input type="text" class="form-control" placeholder="Ex. This is a description" aria-label="Description">
</div>
    <button
      type="button"
      @click="createGuest()"
      class="btn btn-danger"
      >
      Create a new guest
    </button>
</div>
</template>

<script>
export default {
  name: "CreateGuest",
  data() {
    return {
      first_name: "Ime",
      last_name: "Prezime",
      attendee_password: "password",
      fk_id_role: 1,
      mail: "test2@gmail.com",
      username: "test2",
    };
  },
  methods: {
    createGuest() {
      console.log("CreateGuest Component: " + this.first_name);
      const payload = {
        first_name: this.first_name,
        last_name: this.last_name,
        attendee_password: this.attendee_password,
        username: this.username,
        mail: this.mail,
        fk_id_role: this.fk_id_role,
      };
      this.$emit("createGuest", payload);
      //this.clearForm();
    },
    // clearForm() {
    //   this.firstName = "";
    //   this.lastName = "";
    //   this.email = "";
    // },
  },
};
</script>
 
 <style scoped>
  #card-main {
    width: 50em;
  }

  #session-text {
    font-size: 30px;
  }
</style>
 
 
 
 
 
 
 
 
 
 