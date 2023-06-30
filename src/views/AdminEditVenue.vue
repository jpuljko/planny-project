<template>

  <div class="card" id="card-main">
    <div class="card-body">
      <p class="display-6">Edit Venue</p>
      <label htmlFor="exampleInputEmail1">Venue Name</label>
      <input
        type="text"
        class="form-control"
        v-model="venue_name"
        name="venue_name"
        id="venue_name"
        aria-describedby="venue_name"
        placeholder="Venue Name"
      />
      <label htmlFor="exampleInputEmail1" class="mt-2">Venue Capacity</label>
      <input
        type="number"
        class="form-control"
        v-model="venue_capacity"
        name="venue_capacity"
        id="venue_capacity"
        placeholder="Venue Capacity"
      />
      <br />
      <button type="button" @click="updateVenue2()" class="btn btn-danger">
        Confirm Changes
      </button>
    </div>
  </div>
</template>

<script>
import { updateVenue } from "../services/VenueService"


export default {
  name: "AdminEditVenue",
  data() {
    return {
        venue_id: 13,
        venue_name: "sfdsafd",
        venue_capacity: 0
    };
  },
  computed: {
      // venueName() {
      //   return this.$store.state.venue_name
      // }, 
      // venueCapacity() {
      //   return this.$store.state.venue_capacity
      // },
      // idVenue() {
      //   return this.$store.state.id_venue
      // }
  },
  methods: {
    updateVenue() {
      const payload = {
        id_venue: this.id_venue,
        venue_name: this.venue_name, 
        venue_capacity: this.veneue_capacity
      }
      console.log(payload);

      this.$emit("updateVenue", payload);
    },
    updateVenue2(data) {
      console.log(data);
      updateVenue(data).then((reponse) =>{
        alert(reponse.message)
      })
      }
    }
};
</script>

 <style scoped>
#card-main {
  width: 40em;
}

#session-text {
  font-size: 30px;
}

.btn {
  width: 25%;
}
</style>