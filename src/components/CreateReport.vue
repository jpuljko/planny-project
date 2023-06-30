<template>


<div class="text-center" id="container">
  <img src="../assets/admin.jpg" alt="">
    <p class="display-6" id="contact">Contact an administrator</p>
    
<input type="text" class="form-control mb-3" placeholder="Name" v-model="error_date" required/>

<input type="text" class="form-control mb-3" placeholder="Name" v-model="fk_id_attendee" required/>
<input type="text" class="form-control mb-3" placeholder="Subject" v-model="type_of_error" required/>
<textarea class="form-control" placeholder="Type your report here if you ran into a bug or an error, or just want to ask an administrator a question." v-model="message" id="floatingTextarea2"></textarea>

  <button
      type="button"
      @click="createReport()"
      class="btn mt-3"
      >
     Submit report
    </button>
</div>




</template>

<script>
export default {
  name: "CreateReport",
  data() {
    return {
        error_date:"2021-12-12",
        fk_id_attendee:1,
      type_of_error:"Subject1",
      message: "Type your report here if you ran into a bug or an error, or just want to ask an administrator a question.", 
    };
  },
methods:{
  createReport() {
     
      const payload = {
       error_date:this.error_date,
        type_of_error:this.type_of_error, 
        message: this.message,
           fk_id_attendee:this.fk_id_attendee,
         
      };
       console.log("CreatePaymentInfo Component: " + this.message);
      this.$emit("createReport", payload);
         },
         },
 
};
</script>

<style scoped>
    #floatingTextarea2 {
        height: 15em;
    }

    #contact {
      font-family: 'Rubik', sans-serif;
      font-weight: bold;
      color: #2b468b;
    }

    #insideContainer {
      margin: 3em;
    }

    #container {
      margin: 3em;
    }

    #container {
      -moz-transform: scale(0.8, 0.8);
    }

    .btn {
      background-color: #2b468b;
    }

    img {
      width: 30em;
    }
</style>