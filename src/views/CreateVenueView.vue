<template>
  <div>
    <div
      class="container table-wrapper-scroll-y my-custom-scrollbar"
      id="table"
    >
      <CreateVenue @createVenue="createVenue($event)" />
    </div>
  </div>
</template>

<script>
import CreateVenue from "../components/CreateVenue";
import { createVenue } from "../services/VenueService";

export default {
  name: "CreateVenueView",
  components: {
    CreateVenue,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    createVenue(data) {
      console.log("data: ", data);
      createVenue(data).then((response) => {
        alert(response.message);
      });
    },
  }
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
