<template>
  <div>
    <div
      class="container"
    >
      <CreateReport @createReport="createReport($event)" />
    </div>
  </div>
</template>
<script>
import CreateReport from "../components/CreateReport";
import { getMultiple, createReport } from "../services/UserLogService";


export default {
  name: "Report",
  components: {
    CreateReport,
  },
  data() {
    return {
      reports: [],
    };
  },
  methods: {
    getMultiple() {
      getMultiple().then((response) => {
        this.reports = response.data;
        console.log(response);
      });
    },
    createReport(data) {
      console.log("data: ", data);
      createReport(data).then((response) => {
        console.log(response);
      });
    },
  },
  mounted() {
    getMultiple().then((response) => {
      this.reports = response.data;
      console.log(response);
    });
  },
};
 
</script>

<style scoped>
    #floatingTextarea2 {
        height: 15em;
    }
</style>