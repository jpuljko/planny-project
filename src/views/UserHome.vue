<template>
  <div class="row  mt-3" id="responsive">
    <div class="col-lg-6 col-md-6 mt-3">
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">All Events</h5>
          <img src="../assets/all_events.jpg" alt="">
          <router-link to="/user-show_all_events" class="btn" id="seeEventsButton">See All Events</router-link>
        </div>
      </div>
    </div>
        <div class="col-lg-6 col-md-6 mt-3">
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">Personal Events</h5>
          <img src="../assets/calendar.jpg" alt="">
          <router-link to="/user-show_personal_events" class="btn" id="personalEventsButton">See Personal Events</router-link>
        </div>
      </div>
    </div>
    <!-- <div class="col-lg-3 col-md-6">
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">Create an Event</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <router-link to="/create_event" class="btn">Create</router-link>
        </div>
      </div>
    </div> -->
    <!--<div class="col">
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">All Sessions</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <router-link to="/admin-show_sessions" class="btn">Show</router-link>
        </div>
      </div>
    </div>-->
    <div class="col-lg-6 col-md-6 mt-3">
    <div class="card">
      <div class="card-body text-center">
        <h5 class="card-title">Payment Info</h5>
        <img src="../assets/credit_card.jpg" alt="">
        <router-link to="/create_payment_info" class="btn" id="creditCardCreateButton">Create</router-link>
        <router-link to="/edit-payment-info" id="creditCardEditButton" class="btn">Edit</router-link>
      </div>
    </div>
    </div>
    <!-- <div class="col">
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">All Venues</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <router-link to="/admin-show_venues" class="btn">Show</router-link>
        </div>
      </div>
    </div> -->
    <!-- <div class="col">
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">Create a Venue</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <router-link to="/create_venue" class="btn">Create</router-link>
        </div>
      </div>
    </div> -->
      <!--<div class="col">
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">All Guests</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <router-link to="/admin-show_guests" class="btn">Show</router-link>
        </div>
      </div>
    </div>
  </div>
      <div class="col">
    <div class="card">
      <div class="card-body text-center">
        <h5 class="card-title">Create a Guest</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <router-link to="/create_guest" class="btn">Create</router-link>
      </div>
    </div> -->
      <!-- <div class="col">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">User Roles</h5>
            <p class="card-text">
              Shows all attendees, attendee details and their roles.
            </p>
            <a href="#" class="btn" id="buttonUserRoles">Show All</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">All Users</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <router-link to="/admin-show_users" class="btn">Show</router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">Add Users</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <router-link to="/add_user" class="btn">Add</router-link>
          </div>
        </div>
      </div> -->
        <div class="col-lg-6 col-md-6 mt-3">
          <div class="card">
            <div class="card-body text-center">
              <h5 class="card-title">Report a problem</h5>
              <img src="../assets/user_report.jpg" alt="">
              <router-link to="/report" class="btn" id="reportButton">Report</router-link>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "AdminHome",
};
</script>

<style scoped>
body {
  background-color: #dfe7fe;
}

#buttonSeeLogs {
  margin-top: 2em;
}
#buttonUserRoles {
  margin-top: 1.5em;
}

  @media only screen and (max-width: 615px) {
     #responsive {
       padding-top:500px;
     }
    }

img {
  width: 100%;
}

#seeEventsButton {
  background-color: #5b65fa;
}

#personalEventsButton {
  background-color: #fd7d72;
}

#creditCardCreateButton {
  background-color: #3967a5;
  margin-right: 1em;
}

#creditCardEditButton {
  background-color: #60abbe;
}

#reportButton {
  background-color: #fa9746;
}
</style>