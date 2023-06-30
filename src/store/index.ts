import { createStore } from 'vuex'

export default createStore({
  state: {
    //event state
    id_event: 0,
    event_type: "",
    event_name: "testStore",
    date_start: "",
    date_end: "",
    number_allowed: 0,
    
    //attendee state
    id_attendee: 10,

    //venue state
    id_venue: 0,
    venue_name: "test",
    venue_capacity: 0,

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
