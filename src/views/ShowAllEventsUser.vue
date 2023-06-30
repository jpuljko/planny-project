<template>
<div id="card-surrounder">
  <div class="row">
  <div class="col" id="welcomeText">
        <h1 id="title">Subscribe to an event</h1>
        <p id="bodyText"><b id="scrollDown">Scroll down</b> to see available events!</p>
  </div>
  <div class="col-sm-6">
        <img src="../assets/events.jpg" alt="">
  </div>
  </div>
<div id="container">
  <div class="card mb-3" id="eventCard" v-for="(event) in events.rows" v-bind:key="event.id_event">
  <h5 class="card-header">{{ event.event_name }}</h5>
  <div class="card-body">
    <h5 class="card-title">{{ event.event_type }}</h5>
    <p class="card-text"><b>Start:</b> {{ event.date_start }}</p>
    <p class="card-text"><b>End:</b> {{ event.date_end }}</p>
    <p class="card-text"><b>Number allowed:</b> {{ event.number_allowed }}</p>
    <button href="#" class="btn" id="detailsButton">See more details</button>
    <button href="#" class="btn" id="subscribeButton">Subscribe</button>
  </div>
</div>
</div>
</div>
</template>

<script>
import { createAttendeeEvent } from "../services/UserSubscriptionService";
import { getAllEvents } from "../services/EventService";


export default {
  name: "ShowEvents",
  components: {},
  data() {
    return {
      events: [],
    };
  },
  methods: {
    subscribeUser() {
          console.log("Subscribe Component: " + this.first_name);
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
 
  },
  mounted() {
    getAllEvents().then((response) => {
      this.events = response.data;
      console.log(response);
    });
  },
};
</script>

<style scoped>
.card {
    width: 50em; 
}

#detailsButton {
    margin-right: 1em;
    background-color: #ff4455;
}

#subscribeButton {
  background-color: #603481;
}

#card-surrounder {
  position: relative;
  height: 30em;
}

.card-header {
  background-color: #ff4455;
  color: white;
  font-size: 30px;
  font-family: 'Rubik', sans-serif;
}

.card-body {
  background-color: #ffffff;
  color: #2b468b;
  font-family: 'Roboto', sans-serif;
}

img {
  width: 170%;
}

#title {
  font-size: 60px;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
}

.card-title {
  font-size: 30px;
}

#container {
  margin-top: 20em;
  width: 50em;
}

#bodyText {
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  color: #60c1d2;
}

#scrollDown {
  text-decoration: underline;
  color: #ff4455;
}
</style>
