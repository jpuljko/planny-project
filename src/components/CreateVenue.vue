<template>

  <div class="card" id="card-main">
    <div class="card-body">

      <p class="display-6">Create a venue</p>
      <label for="exampleInputEmail1" class="form-label mt-2"
        >Venue Name</label
      >
      <input
        type="text"
        class="form-control"
        v-model="venue_name"
        name="venue_name"
        id="venue_name"
        aria-describedby="venue_name"
        placeholder="Venue name"
      />

      <label for="exampleInputEmail1" class="form-label mt-2"
        >Venue Capacity</label
      >
      <input
        type="number"
        class="form-control"
        v-model="venue_capacity"
        name="venue_capacitiy"
        id="venue_capacity"
        aria-describedby="venue_capacity"
        placeholder="Venue Capacity"
      />
      <button type="button" @click="createVenue()" class="btn mt-4">
        Create a new venue
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: "CreateVenue",
  data() {
    return {
     venue_name: "",
     venue_capacity: 0,
    };
  },
  methods: {
    createVenue() {
      console.log("CreateVenue Component: " + typeof this.venue_capacity);
      const payload = {
        venue_name : this.venue_name,
        capacity : this.venue_capacity
      };
      this.$emit("createVenue", payload);
      //this.clearForm();
    },
    // clearForm() {
    //   this.firstName = "";
    //   this.lastName = "";
    //   this.email = "";
    // },
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

.btn {
  width: 25%;
}
</style>
 
 
 
 
 
 
 
 
 
 