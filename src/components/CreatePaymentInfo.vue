<template>
<div id="container">
  <div class="card" id="card-main">
  <div class="card-body">
    <p class="display-6" id="card_info_text">Your Card Information</p>
    <img src="../assets/card-chip.png" alt="Card Chip" id="card-chip"><img src="../assets/contactless.png" alt="Card Chip" id="contactless"><br>
  <label htmlFor="exampleInputEmail1" class="mt-2">Card Number</label>
  <input type="text" class="form-control mt-2" placeholder="Ex. 123456789101" v-model="credit_card_number" aria-label="Card Number">
  <div class="row mt-3">
  <div class="col">
    <label htmlFor="exampleInputEmail1">Name:</label>
    <input type="text" class="form-control" placeholder="Ex. John J. Doe"  v-model="full_name"  aria-label="First name">
  </div>
  </div>

  <label htmlFor="exampleInputEmail1" class="mt-2">Exp. Date</label>
  <input type="date" class="form-control" placeholder="mm-yy" v-model="expiration_date" aria-label="Exp date">

    <label htmlFor="exampleInputEmail1" class="mt-2">Security code</label>
  <input type="text" class="form-control" placeholder="123" v-model="security_code" aria-label="SEC">

  <div class="row mt-3">
  <div class="col">
    <label htmlFor="exampleInputEmail1">Country:</label>
    <input type="text" class="form-control" placeholder="USA" v-model="country" aria-label="Country">
  </div>
  <div class="col">
    <label htmlFor="exampleInputEmail1">Zip:</label>
    <input type="text" class="form-control" placeholder="10000" v-model="zip" aria-label="Zipcode">
  </div>
</div>
  
</div>
<div class="text-center mb-2">
    <button
      type="button"
      @click="postPaymentInfo()"
      class="btn"
      id="createPaymentInfoButton">
      Create payment info
    </button>
</div>

</div>
</div>
</template>

<script>
export default {
  name: "CreatePaymentInfo",
  data() {
    return {
      fk_id_attendee:3,
      credit_card_number: "1234-5678-9101-1123",
      expiration_date: "2020-12-12",
      security_code: "000",
      country: "USA",
      zip: "12334",
    };
  },
  methods: {
    postPaymentInfo() {
     
      const payloado = {
        fk_id_attendee:this.fk_id_attendee,
        full_name:this.full_name, 
        credit_card_number: this.credit_card_number,
        expiration_date: this.expiration_date,
        security_code: this.security_code,
        country: this.country,
        zip: this.zip,
        
      };
       console.log("CreatePaymentInfo Component: " + this.credit_card_number);
      this.$emit("postPaymentInfo", payloado);
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
    #card_info_text {
    font-family: 'Rubik', sans-serif;
    color: white;
    }

  #card-main {
    width: 60em;
 background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(66,66,205,1) 0%, rgba(114,161,240,1) 100%); 
    color: white;
    font-family: 'Rubik', sans-serif;
  }

  #card-chip {
      width: 3.5em;
  }

  #contactless {
    width: 3.5em;
  }

#createPaymentInfoButton {
  width: 25%;
  background-color: #f3cc2f;
  color: #c72b2c;
}

#container {
  -moz-transform: scale(0.8, 0.8);
}

</style>
 
 
 
 
 
 
 
 
 
 