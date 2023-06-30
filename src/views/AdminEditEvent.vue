<template>

  <div class="card" id="card-main">
    <div class="card-body">

      <p class="display-6">Edit Event</p>
      <label htmlFor="exampleInputEmail1">Event Name</label>

      <input
        type="text"
        class="form-control"
        v-model="eventName"
        name="event_name"
        id="event_name"
        aria-describedby="event_name"
        placeholder="Event_name"
      />
      <label htmlFor="exampleInputEmail1" class="mt-2">Event Type</label>
      <input
        type="text"
        class="form-control"
        v-model="eventType"
        name="event_type"
        id="event_type"
        placeholder="Event type"
      />

      <label htmlFor="exampleInputEmail1" class="mt-2">Date Start</label>
      <input
        type="text"
        class="form-control"
        v-model="dateStart"
        name="date_start"
        id="date_start"
        placeholder="Date Start"
      />

      <label htmlFor="exampleInputEmail1">Date End</label>
      <input
        type="text"
        class="form-control"
        v-model="dateEnd"
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
        v-model="numberAllowed"
        name="number_allowed"
        id="number_allowed"
        aria-describedby="numberAllowed"
        placeholder="Number Allowed"
      />
    
      <br />

    <button type="button" @click="createAttendee()" class="btn btn-danger">
      Confirm changes
    </button>
    
    </div>
  </div>
</template>

<script>

export default {
  name: "AdminEditEvent",
  data() {
    return {

    };
  },
  computed: {
      eventName() {
        return this.$store.state.event_name
      }, 
      eventType() {
        return this.$store.state.event_type
      },
      dateStart() {
        return this.$store.state.date_start
      },
      dateEnd() {
        return this.$store.state.date_end
      },
      numberAllowed() {
        return this.$store.state.number_allowed
      }
  }
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