import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import AdminHome from '@/views/AdminHome.vue'
import UserHome from '@/views/UserHome.vue'
import AdminEditEvent from '@/views/AdminEditEvent.vue'
import ShowEvents from '@/views/ShowEvents.vue'
import ShowAllEventsUser from '@/views/ShowAllEventsUser.vue'
import ShowPersonalEventsUser from '@/views/ShowPersonalEventsUser.vue'
import ShowSessions from '@/views/ShowSessions.vue'
import ShowVenues from '@/views/ShowVenues.vue'
import ShowGuests from '@/views/ShowGuests.vue'
import ShowUsers from '@/views/ShowUsers.vue'
import CreateEventView from '@/views/CreateEventView.vue'
import CreateVenueView from '@/views/CreateVenueView.vue'
import CreateGuestView from '@/views/CreateGuestView.vue'
import CreateAttendeeView from '@/views/CreateAttendeeView.vue'
import Report from '@/views/Report.vue'
import CreatePaymentInfoView from '@/views/CreatePaymentInfoView.vue'
import UserReport from '@/views/UserReport.vue'
import AdminEditVenue from '@/views/AdminEditVenue.vue'


const routes: Array<RouteRecordRaw> = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/admin_home', component: AdminHome},
  {path: '/user_home', component: UserHome},
  {path: '/admin-edit_event', component: AdminEditEvent},
  {path: '/admin-show_events', component: ShowEvents},
  {path: '/user-show_all_events', component: ShowAllEventsUser},
  {path: '/user-show_personal_events', component: ShowPersonalEventsUser},
  {path: '/admin-show_sessions', component: ShowSessions},
  {path: '/admin-show_venues', component: ShowVenues},
  {path: '/admin-show_guests', component: ShowGuests},
  {path: '/admin-show_users', component: ShowUsers},
  {path: '/create_event', component: CreateEventView},
  {path: '/create_venue', component: CreateVenueView},
  {path: '/create_guest', component: CreateGuestView},
  {path: '/add_user', component: CreateAttendeeView},
  {path: '/report', component: Report},
  {path: '/create_payment_info', component: CreatePaymentInfoView},
  {path: '/user_report', component: UserReport},
  {path: '/admin-edit_venue', component: AdminEditVenue}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
