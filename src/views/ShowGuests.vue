<template>
  <div class="container table-wrapper-scroll-y my-custom-scrollbar" id="table">
    <button v-on:click="getHomePageMessage()">Say hi</button>
    <table class="table table-bordered table-striped mb-0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Id Attendee</th>
          <th scope="col">Firstname</th>
          <th scope="col">LastName</th>
          <th scope="col">Password</th>
          <th scope="col">Role ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users.rows" v-bind:key="user.id_attendee">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ user.id_attendee }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.attendee_password }}</td>
          <td>{{ user.fk_id_role }}</td>
        </tr>
      </tbody>
    </table>

    <!-- <ul id="example-1">
        <li v-for="user in users" :key="user.id_attendee">
        {{ user.first_name }}
            </li>
        </ul> -->
  </div>
</template>

<script>
import { getHomePageMessage } from "../services/AttendeeService";
//import Users from '../components/Users';

export default {
  name: "ShowGuests",
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
    getHomePageMessage() {
      getHomePageMessage().then((response) => {
        this.users = response.data;
        console.log(response);
      });
    },
  },
  mounted() {
    getHomePageMessage().then((response) => {
      this.users = response.data;
      console.log(response);
    });
  },
};
</script>

<style scoped>
.my-custom-scrollbar {
  position: relative;
  height: 30em;
  overflow: auto;
}
.table-wrapper-scroll-y {
  display: block;
}
</style>
