<template>
  <div>
    <div
      class="container"
      id="table"
    >
      <CreateAttendee @createAttendee="createAttendee($event)" />
    </div>
  </div>
</template>

<script>
import CreateAttendee from "../components/CreateAttendee";
import { getAllAttendees, createAttendee } from "../services/AttendeeService";

export default {
  name: "CreateAttendeeView",
  components: {
    CreateAttendee,
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
        alert(response.message);
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
