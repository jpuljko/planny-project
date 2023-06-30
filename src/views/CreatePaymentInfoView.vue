<template>
  <div>
    <div
      id="table"
    >
      <CreatePaymentInfo @postPaymentInfo="postPaymentInfo($event)" />
    </div>
  </div>
</template>

<script>
import CreatePaymentInfo from "../components/CreatePaymentInfo";
import { getPaymentInfo, postPaymentInfo } from "../services/PaymentInfoService";

export default {
  name: "CreatePaymentInfoView",
  components: {
    CreatePaymentInfo,
  },
  data() {
    return {
      payments: [],
    };
  },
  methods: {
    getPaymentInfo() {
      getPaymentInfo().then((response) => {
        this.payments = response.data;
        console.log(response);
      });
    },
    postPaymentInfo(data) {
      console.log("data: ", data);
      postPaymentInfo(data).then((response) => {
        console.log(response);
      });
    },
  },
  mounted() {
    getPaymentInfo().then((response) => {
      this.payments = response.data;
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
