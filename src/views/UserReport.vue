<template>
  <div class="container" id="table">
    
    <table class="table table-bordered table-striped mb-0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Error Date</th>
          <th scope="col">Type of Error</th>
          <th scope="col">Message</th>
          <th scope="col">Attendee</th>
       
        </tr>
      </thead>
      <tbody>
        <tr v-for="(userReport, index) in userReports.rows" v-bind:key="userReport.id_error">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ userReport.error_date }}</td>
          <td>{{ userReport.type_of_error }}</td>
          <td>{{ userReport.message }}</td>
          <td>{{ userReport.fk_id_attendee }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getMultiple, removeLog } from "../services/UserLogService";


export default {
  name: "UserReport",
  components: {},
  data() {
    return {
      userReports: [],
    };
  },
  methods: {
    getMultiple() {
      getMultiple().then((response) => {
        this.userReports = response.data;
        console.log(response);
      });
    },
    removeLog(data) {
      removeLog(data).then((response) => {
        if (response) {
          alert(response.message);
          getMultiple().then((response) => {
            this.userReports = response.data;
            console.log(response);
          });
        }
      });
    },
  },
  mounted() {
    getMultiple().then((response) => {
      this.userReports = response.data;
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
