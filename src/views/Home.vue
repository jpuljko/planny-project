<template>
  <div class="row">
    <div class="col" id="welcomeText">

      <h1 class="display-6" id="title">WELCOME!</h1>
      <p id="bodyText">
        Planny is an event management web application that is supposed to
        simplify the process of event organization and management for the
        organisers and to give attendees a more easy and quick way to search and
        sign up for the events. It is supposed to help organiser to create,
        manage, and promote events. Also the attendees will have the ability to
        go through all the events, view the details and subscribe to the event
        or even for the part of the event. All of this is right under their
        fingertips.
      </p>
      <div class="buttonGroup d-inline-flex">
        <router-link to="/login" class="btn btn-lg first">Log In</router-link>
        <router-link to="/register" class="btn btn-lg">Register</router-link>
      </div>

    </div>
    
    <div class="col-sm-6">
      <img src="../assets/event_management.jpg" alt="" />
    </div>

    <!-- <button v-on:click="getHomePageMessage()">Say hi</button>
      <table class="table table-bordered table-striped mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Firstname</th>
            <th scope="col">LastName</th>
            <th scope="col">Password</th>
            <th scope="col">Role ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users.rows" v-bind:key="user.id_attendee">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.attendee_password }}</td>
            <td>{{ user.fk_id_role }}</td>
          </tr>
        </tbody>
      </table>-->

    <!-- <CreateAttendee @createAttendee="createAttendee($event)" /> -->
    <!--<UpdateAttendee @updateAttendee="updateAttendee($event)" />-->
    <!-- <UpdateAttendee @deleteAttendee="deleteAttendee($event)" /> -->
  </div>
</template>

<script>
// import CreateAttendee from "../components/CreateAttendee";
// import UpdateAttendee from "../components/UpdateAttendee";
// import {
//   getAllAttendees,
//   createAttendee,
//   updateAttendee,
//   deleteAttendee,
// } from "../services/AttendeeService";

export default {
  name: "Home",
  // components: {
  //   CreateAttendee,
  //   UpdateAttendee,
  // },
  // data() {
  //   return {
  //     users: [],
  //   };
  // },
  // methods: {
  //   getAllAttendees() {
  //     getAllAttendees().then((response) => {
  //       this.users = response.data;
  //       console.log(response);
  //     });
  //   },
  //   createAttendee(data) {
  //     console.log("Create Attendee: ", data);
  //     createAttendee(data).then((response) => {
  //       console.log(response);
  //     });
  //   },
  //   updateAttendee(data) {
  //     console.log("Update Attendee: ", data);
  //     updateAttendee(data).then((response) => {
  //       console.log(response);
  //     });
  //   },
  //   deleteAttendee(data) {
  //     deleteAttendee(data).then((response) => {
  //       console.log(response);
  //     });
  //   },
  // },
  // mounted() {
  //   getAllAttendees().then((response) => {
  //     this.users = response.data;
  //     console.log(response);
  //   });
  // },
};
</script>

<style scoped>
.row {
  position: relative;
  height: 20em;
}

img {
  width: 100%;
}

#welcomeText {
  width: 70em;
  font-size: 20px;
  color: #2b468b;
}

.btn {
  background-color: #fa9746;
  margin-left: 10px;
}

#title {
  font-family: "Rubik", sans-serif;
  font-weight: bold;
}

#bodyText {
  font-family: "Roboto", sans-serif;
  text-align: justify;
}

.first {
  margin-right: 16px;
}
</style>
