
<template>

  <div class="row g-4 mt-3" id="test">

    <div class="col-lg-3 col-md-6">
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">All Events</h5>
          <img src="../assets/allEvents.jpg" alt="">
          <router-link to="/admin-show_events" class="btn" id="allEventsButton">Show</router-link>

        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6">
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">Create an Event</h5>
          <img src="../assets/createVenue.jpg" alt="" class="createEventImg">
         <router-link to="/create_event" class="btn" id="createEvent">Create</router-link>

        </div>
      </div>
    </div>
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
    </div>
    <div class="col">
    <div class="card">
      <div class="card-body text-center">
        <h5 class="card-title">Payment Info</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn">Show</a>
      </div>
    </div>
    </div>-->
    <div class="col-lg-3 col-md-6">
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">All Venues</h5>
          <img src="../assets/venue.jpg" alt="">

          <router-link to="/admin-show_venues" class="btn" id="allVenuesBtn">Show</router-link>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6">
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">Create a Venue</h5>
          <img src="../assets/NewProject.jpg" alt="">

          <router-link to="/create_venue" class="btn" id="createVenueImg">Create</router-link>
        </div>
      </div>
    </div>
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
      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">User Roles</h5>
          <img src="../assets/userRoles.jpg" alt="">

            <a href="#" class="btn" id="buttonUserRoles">Show All</a>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">All Users</h5>
          <img src="../assets/allUsers.jpg" alt="">

            <router-link to="/admin-show_users" class="btn" id="allUsersBtn">Show</router-link>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">Add Users</h5>
           <img src="../assets/add_users.jpg" alt="">

            <router-link to="/add_user" class="btn" id="addUserBtn">Add User</router-link>
          </div>
        </div>
      </div>

        <div class="col-lg-3 col-md-6">
          <div class="card">
            <div class="card-body text-center">
              <h5 class="card-title">User Reports</h5>
                  <img src="../assets/userReports.jpg" alt="">
                <router-link to="/user_report" class="btn" id="userReportBtn">See Log</router-link>
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
@media only screen and (max-width: 700px) {
  #test {
    padding-top: 1400px;
  }
}

img {
  width: 70%;
  max-height: 116.19px;
  object-fit: contain;
}

.btn {
  margin-top: 1em;
}

#allEventsButton {
  background-color: #4548ed;
  
}
#createEvent {
  background-color: #fa9746; /** */
}
#createVenueImg{
  background-color: #FF7F50;
}

#userReportBtn{
  background-color: #4548ed;
}

#allVenuesBtn{
  background-color: #ab6fda;
}

#addUserBtn{
  background-color: #FF7F50;
}

#allUsersBtn{
    background-color: #4548ed;
}
#buttonUserRoles{
    background-color: #ab6fda;
}

</style>