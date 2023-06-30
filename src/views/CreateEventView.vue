<template>
  <div>
    <div
      class="container"
      id="table"
    >
      <CreateEvent @createEvent="createEvent($event)" />
    </div>
  </div>
</template>

<script>
import CreateEvent from "../components/CreateEvent";
import { createEvent } from "../services/EventService";
export default {
  name: "CreateEventView",
  components: {
    CreateEvent,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    createEvent(data) {
      createEvent(data).then((response) => {
        alert(response.message);
      });
    },
  },
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
