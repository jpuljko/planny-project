<template>
  <div class="container" id="table">
    <table class="table table-bordered table-striped mb-0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Firstname</th>
          <th scope="col">LastName</th>
          <th scope="col">Role ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users.rows" v-bind:key="user.id_attendee">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td v-if="user.fk_id_role == 1">Admin</td>
          <td v-else-if="user.fk_id_role == 2">Event Manager</td>
          <td v-else>Attendee</td>
          <td><a href="#" class="btn">Delete</a></td>
        </tr>
      </tbody>
    </table>
        <br>
    <br>
    <br>
  </div>
</template>

<script>
import { getAllAttendees } from "../services/AttendeeService";

export default {
  name: "ShowUsers",
  components: {
    //message,
    //Users
  },
  data() {
    return {
      //message: []
      users: [],
    };
  },
  methods: {
    getAllAttendees() {
      getAllAttendees().then((response) => {
        this.users = response.data;
        console.log(response);
      });
    },
  },
  mounted() {
    getAllAttendees().then((response) => {
      this.users = response.data;
      console.log(response);
    });
  },
};
</script>

<style scoped>
#table {
  position: relative;
  height: 30em;
}
</style>