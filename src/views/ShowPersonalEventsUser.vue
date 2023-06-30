<template>
  <div id="card-surrounder">
    <div class="row">
      <div class="col" id="welcomeText">
        <h1 id="title">Your personal events</h1>
        <p id="bodyText">
          Check the events you're subscribed to <b id="scrollDown">below!</b>
        </p>
      </div>
      <div class="col-sm-6">
        <img src="../assets/personal.png" alt="" />
      </div>
    </div>
    <div>
      <div
        class="card mb-3"
        v-for="event in events.rows"
        v-bind:key="event.id_event"
      >
        <h5 class="card-header">{{ event.event_name }}</h5>
        <div class="card-body">
          <h5 class="card-title">{{ event.event_type }}</h5>
          <p class="card-text"><b>Start:</b> {{ event.date_start }}</p>
          <p class="card-text"><b>End:</b> {{ event.date_end }}</p>
          <p class="card-text">
            <b>Number allowed:</b> {{ event.number_allowed }}
          </p>
          <button href="#" class="btn" id="details-button">
            See more details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAllAttendeeEvents,
  deleteAttendeeEvent,
} from "../services/AttendeeEventService";
export default {
  name: "ShowEvents",
  components: {},
  data() {
    return {
      events: [],
    };
  },
  methods: {
    getAllAttendeeEvents() {
      getAllAttendeeEvents().then((response) => {
        this.events = response.data;
        console.log(response);
      });
    },
    deleteAttendeeEvent(data) {
      deleteAttendeeEvent(data).then((response) => {
        if (response) {
          alert(response.message);
          getAllAttendeeEvents().then((response) => {
            this.events = response.data;
            console.log(response);
          });
        }
      });
    },
  },
  mounted() {
    getAllAttendeeEvents().then((response) => {
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
#details-button {
  margin-right: 1em;
  background-color: #fa3442;
}
#card-surrounder {
  position: relative;
  height: 30em;
}
.card {
  width: 50em;
}

#card-surrounder {
  position: relative;
  height: 30em;
}

.card-header {
  background-color: #493864;
  color: white;
  font-size: 30px;
  font-family: "Rubik", sans-serif;
}

.card-body {
  background-color: #ffffff;
  color: #2b468b;
  font-family: "Roboto", sans-serif;
}

img {
  width: 185%;
}

#title {
  font-size: 60px;
  font-family: "Rubik", sans-serif;
  font-weight: bold;
}

.card-title {
  font-size: 30px;
}

#bodyText {
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  color: #fecc5d;
}

#scrollDown {
  text-decoration: underline;
  color: #fe5a59;
}
</style>