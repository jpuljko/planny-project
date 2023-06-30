<template>
  <div class="card" id="card-main">
    <div class="card-body">
      <p class="display-6">Add a New Event</p>
      <label htmlFor="exampleInputEmail1">Event Name</label>
      <input
        type="text"
        class="form-control"
        v-model="event_name"
        name="event_name"
        id="event_name"
        aria-describedby="event_name"
        placeholder="Event Name"
      />
      <label htmlFor="exampleInputEmail1" class="mt-2">Event Type</label>
      <input
        type="text"
        class="form-control"
        v-model="event_type"
        name="event_type"
        id="event_type"
        placeholder="Event Type"
      />

      <label htmlFor="exampleInputEmail1" class="mt-2">Date Start</label>
      <input
        type="text"
        class="form-control"
        v-model="date_start"
        name="date_start"
        id="date_start"
        placeholder="Date Start"
      />

      <label htmlFor="exampleInputEmail1" class="mt-2">Date End</label>
      <input
        type="text"
        class="form-control"
        v-model="date_end"
        name="date_end"
        id="date_end"
        placeholder="Date End"
      />

      <label for="exampleInputEmail1" class="form-label mt-2"
        >Number Allowed</label
      >
      <input
        type="number"
        class="form-control"
        v-model="number_allowed"
        name="number_allowed"
        id="number_allowed"
        aria-describedby="number_allowed"
        placeholder="number_allowed"
      />
      <label for="exampleInputEmail1" class="form-label mt-2"
        >Venue</label
      >
      <input
        type="number"
        class="form-control"
        v-model="fk_id_venue"
        name="fk_id_venue"
        id="fk_id_venue"
        aria-describedby="fk_id_venue"
        placeholder="Venue"
      />
      <br />
          <button type="button" @click="createEvent()" class="btn btn-dark">
      Add new Event
    </button>
    </div>


  </div>
</template>


<script>
export default {
  name: "CreateEvent",
  data() {
    return {
      event_type: "test",
      event_name: "test",
      date_start: "2021-02-11",
      date_end: "2021-02-11",
      number_allowed: 2020,
      fk_id_venue: 3,
    };
  },
  methods: {
    createEvent() {
      console.log("CreateEvent Component: " + this.event_name);
      const payload = {
        event_type: this.event_type,
        event_name: this.event_name,
        date_start: this.date_start,
        date_end: this.date_end,
        number_allowed: this.number_allowed,
        fk_id_venue: this.fk_id_venue
        
      };
      this.$emit("createEvent", payload);
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
</style>
 
 
 
 
 
 
 
 
 
 