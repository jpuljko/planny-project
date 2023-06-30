<template>
  <div class="container" id="table">
    <table class="table table-bordered table-striped mb-0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Venue name</th>
          <th scope="col">Capacity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(venue, index) in venues.rows" v-bind:key="venue.id_venue">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ venue.venue_name }}</td>
          <td>{{ venue.capacity }}</td>
          <td><router-link to="/admin-edit_venue" href="#" class="btn" v-on:click="storeVenueData(venue.id_venue, venue.venue_name, venue_capacity)">Edit</router-link></td>
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
import { getAllVenues } from "../services/VenueService";

export default {
  name: "ShowVenues",
  components: {},
  data() {
    return {
      venues: [],
    };
  },
  methods: {
    getAllVenues() {
      getAllVenues().then((response) => {
        this.venues = response.data;
        console.log(response);
      });
    },
     storeVenueData(id_venue, venue_name, venue_capacity) {
      this.$store.state.id_venue = id_venue
      this.$store.state.venue_name = venue_name
      this.$store.state.venue_capacity = venue_capacity
    },
  },
  mounted() {
    getAllVenues().then((response) => {
      this.venues = response.data;
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
