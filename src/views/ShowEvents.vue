<template>
  <div class="container" id="table">
    <table class="table table-bordered table-striped mb-0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Event Type</th>
          <th scope="col">Event Name</th>
          <th scope="col">Date Start</th>
          <th scope="col">Date End</th>
          <th scope="col">Number Allowed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in events.rows" v-bind:key="event.id_event">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ event.event_type }}</td>
          <td>{{ event.event_name }}</td>
          <td>{{ event.date_start }}</td>
          <td>{{ event.date_end }}</td>
          <td>{{ event.number_allowed }}</td>
          <td>
            <router-link to="/admin-edit_event" class="btn" tag="button" v-on:click="storeEventData(event.id_event,event.event_type, event.event_name, event.date_start, event.date_end, event.number_allowed)">Edit</router-link>
          </td>
          <td>
            <button v-on:click="deleteEvent(event.id_event)" class="btn btn-dark">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
        <br>
    <br>
    <br>
  </div>
</template>

<script>
import { getAllEvents, deleteEvent } from "../services/EventService";

export default {
  name: "ShowEvents",
  components: {},
  data() {
    return {
      events: [],
    };
  },
  methods: {
    getAllEvents() {
      getAllEvents().then((response) => {
        this.events = response.data;
        console.log(response);
      });
    },
    storeEventData(id_event, event_type, event_name, date_start, date_end, number_allowed) {
      this.$store.state.id_event = id_event
      this.$store.state.event_type = event_type
      this.$store.state.event_name = event_name
      this.$store.state.date_start = date_start
      this.$store.state.date_end = date_end
      this.$store.number_allowed = number_allowed
    },
    deleteEvent(data) {
      deleteEvent(data).then((response) => {
        if (response) {
          alert(response.message);
          getAllEvents().then((response) => {
            this.events = response.data;
            console.log(response);
          });
        }
      });
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
#table {
  position: relative;
  height: 30em;
}


</style>
