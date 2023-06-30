<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 mrgnbtm">
        <form>
          <div class="row">
            <div class="col-md-7 mrgnbtm">
              <h2>Update Attendee</h2>
              <form>
                <div class="row">
                  <div class="form-group col-md-6">
                    <label htmlFor="exampleInputEmail1">ID Attendee</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="id_attendee"
                      name="id_attendee"
                      id="id_attendee"
                      aria-describedby="id_attendee"
                      placeholder="ID Attendee"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label htmlFor="exampleInputEmail1">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="first_name"
                      name="first_name"
                      id="last_name"
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label htmlFor="exampleInputPassword1">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="last_name"
                      name="last_name"
                      id="last_name"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label htmlFor="attendeePassword">Attendee Password</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="attendee_password"
                      name="attendee_password"
                      id="attendee_password"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label htmlFor="exampleInputPassword1">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="username"
                      name="username"
                      id="username"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-12">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="mail"
                      name="mail"
                      id="mail"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-12">
                    <label htmlFor="fk_id_role">Role</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="fk_id_role"
                      name="fk_id_role"
                      id="fk_id_role"
                      aria-describedby="fk_id_role"
                      placeholder="Role"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  @click="updateAttendee()"
                  class="btn btn-danger"
                >
                  Update
                </button>
                <button
                  type="button"
                  @click="deleteAttendee()"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateAttendee",
  data() {
    return {
      id_attendee: 45,
      first_name: "Ime",
      last_name: "Prezime",
      attendee_password: "password",
      fk_id_role: 1,
      mail: "test2@gmail.com",
      username: "test2",
    };
  },
  methods: {
    updateAttendee() {
      const payload = {
        id_attendee: this.id_attendee,
        first_name: this.first_name,
        last_name: this.last_name,
        attendee_password: this.attendee_password,
        username: this.username,
        mail: this.mail,
        fk_id_role: this.fk_id_role,
      };
      this.$emit("updateAttendee", payload);
      //this.clearForm();
    },
    deleteAttendee() {
      const payload = {
        id_attendee: this.id_attendee,
      };
      this.$emit("deleteAttendee", payload);
    },
    // clearForm() {
    //   this.firstName = "";
    //   this.lastName = "";
    //   this.email = "";
    // },
  },
};
</script>
 
 
 
 
 
 
 
 
 
 
 
 