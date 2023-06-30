<template>
  <div>
    <div
      class="container table-wrapper-scroll-y my-custom-scrollbar"
      id="table"
    >
      <CreateGuest @createGuest="createGuest($event)" />
    </div>
  </div>
</template>

<script>
import CreateGuest from "../components/CreateGuest";
import { getAllAttendees, createAttendee } from "../services/AttendeeService";

export default {
  name: "CreateGuestView",
  components: {
    CreateGuest,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getAllAttendees() {
      getAllAttendees().then((response) => {
        this.users = response.data;
        console.log(response);
      });
    },
    createAttendee(data) {
      console.log("data: ", data);
      createAttendee(data).then((response) => {
        console.log(response);
      });
    },
  },
  mounted() {
    getAllAttendees().then((response) => {
      this.users = response.data;
      console.log(response);
    });
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
