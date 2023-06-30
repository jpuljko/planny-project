<template>

  <div class="card" id="card-main">
    <div class="card-body">
      <p class="display-6">Add a new user</p>
      <label htmlFor="exampleInputEmail1">First Name</label>
      <input
        type="text"
        class="form-control"
        v-model="first_name"
        name="first_name"
        id="last_name"
        aria-describedby="first_name"
        placeholder="First Name"
      />
      <label htmlFor="exampleInputEmail1" class="mt-2">Last name</label>
      <input
        type="text"
        class="form-control"
        v-model="last_name"
        name="last_name"
        id="last_name"
        placeholder="Last Name"
      />

      <label htmlFor="exampleInputEmail1" class="mt-2">Password</label>
      <input
        type="text"
        class="form-control"
        v-model="attendee_password"
        name="attendee_password"
        id="attendee_password"
        placeholder="Password"
      />

      <label htmlFor="exampleInputEmail1">Username</label>
      <input
        type="text"
        class="form-control"
        v-model="username"
        name="username"
        id="username"
        placeholder="Username"
      />

      <label for="exampleInputEmail1" class="form-label mt-2"
        >Email address</label
      >
      <input
        type="text"
        class="form-control"
        v-model="mail"
        name="mail"
        id="mail"
        aria-describedby="emailHelp"
        placeholder="Email"
      />
      <label for="exampleInputEmail1" class="form-label mt-2"
        >Role</label
      >
      <input
        type="number"
        class="form-control"
        v-model="fk_id_role"
        name="fk_id_role"
        id="fk_id_role"
        aria-describedby="emailHelp"
        placeholder="User Role"
      />

      <!--<div id="box-select">
        <select class="form-control" @change="onChange($event)">
          <option value="" selected disabled>Choose Role</option>
          <option
            v-for="role in roles"
            :value="role.id"
            :key="role.id"
          >
            {{ role.title }}
          </option>
        </select>
        <p><span>Selected role: {{ fk_id_role }}</span></p>
      </div>-->
      <br />
          <button type="button" @click="createAttendee()" class="btn btn-dark">
      Add new user
    </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateAttendee",
  data() {
    return {
      first_name: "Ime",
      last_name: "Prezime",
      attendee_password: "password",
      fk_id_role: 0,
      mail: "test2@gmail.com",
      username: "test2",
      roles: [
        {
          id: 1,
          title: "Admin",
        },
        {
          id: 2,
          title: "Event Manager",
        },
        {
          id: 3,
          title: "Attendee",
        },
      ],
    };
  },
  methods: {
    createAttendee() {
      console.log("CreateAttendee Component: " + this.first_name);
      const payload = {
        first_name: this.first_name,
        last_name: this.last_name,
        attendee_password: this.attendee_password,
        username: this.username,
        mail: this.mail,
        fk_id_role: this.fk_id_role,
      };
      this.$emit("createAttendee", payload);
      //this.clearForm();
    },
    // clearForm() {
    //   this.firstName = "";
    //   this.lastName = "";
    //   this.email = "";
    // },
   onChange(event) {
    this.fk_id_role = event.target.options[event.target.options.selectedIndex].id;
    console.log(typeof this.fk_id_role);
  }
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
 
 
 
 
 
 
 
 
 
 