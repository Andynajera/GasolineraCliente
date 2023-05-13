
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Users: [],
    Gasoleo: [],
    Promociones: [],

    //Login
    isAuthenticated: false,
    role: ''


  },
  getters: {

  },
  mutations: {

    //Login
    setAuthenticated(state) {
      state.isAuthenticated = true
    },
    setRole(state, role) {
      state.role = role
    },



    //Usuarios
    setUsers(state, payload) {
      state.Users = payload
    },
    setUsersId(state, setIDU) {
      state.Users = state.Users.filter(({ id }) => id === setIDU);
    },
    addUsers(state, payload) {
      state.Users.push(payload)
    },
    deleteUser(state, idToRemove) {
      state.Users = state.Users.filter(({ id }) => id !== idToRemove);
    },
    /*deleteUser(state,idToRemove){
     this.Users=this.cars.filter{Users=>Users.id!=id}
   }*/


    /* modifyUsers(state,payload){
       payload.id=
       payload.info={
 
       }
     }*/

    //Gasoleo
    setGasoleo(state, payload) {
      state.Gasoleo = payload
    },
    addGasoleo(state, payload) {
      state.Gasoleo.push(payload)
    },
    deleteGasoleo(state, idToRemove) {
      state.Gasoleo = state.Gasoleo.filter(({ id }) => id !== idToRemove);
    },

    //Promociones
    setPromocion(state, payload) {
      state.Promociones = payload
    },
    deletePromocion(state, idToRemove) {
      state.Promociones = state.Promociones.filter(({ id }) => id !== idToRemove);
    },
    addPromocion(state, payload) {
      state.Promociones.push(payload)
    },
  },
  actions: {
    //LOGIN
    login({ commit }, payload) {
      console.log(`payload ${JSON.stringify(payload)}`);
      //fetch
      if (payload.username === 'admin' && payload.password === 'admin') {
        commit('setAuthenticated')
        commit('setRole', 'admin')
        return true

      }
      if (payload.username === 'andrea' && payload.password === 'Logroño') {
        commit('setAuthenticated')
        commit('setRole', 'userAndrea')
        return true

      }
      if (payload.username === 'teacher' && payload.password === 'teacher') {
        commit('setAuthenticated')
        commit('setRole', 'userTeacher')
        return true

      }
      return false



    },



    //USUARIOS
    //ver el listado de usuarios
    fetchUsers({ commit }) {
      fetch('https://localhost:7064/Users')
        .then(result => result.json())
        .then(data => commit('setUsers', data))
    },
    setUsersId({ commit }, id) {
      fetch('https://localhost:7064/Users' + `/${this.id}`)
        .then(result => result.json())
        .then(data => commit('setUsersId', data))

      //recargar pagina
      commit('setUsersId', id)
    },

    //hacer el post
    addUsers({ commit }, userInfo) {
      //commit('addUsers',userInfo)
      fetch('https://localhost:7064/Users', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      })
        .then(result => result.json())
        .then(data => commit('addUsers', data))
    },

    //Buscar por nombre
    searchUser({ commit }, name) {
      fetch('https://localhost:7064/Users/name?name=' + `${name}`)


        .then(result => result.json())

        .then(data => commit('setUsers', data))
      commit('setUsers', name)
    },



    deleteUser({ commit }, id) {
      fetch('https://localhost:7064/Users' + `/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify
      })

        .then(result => result.json())
        .then(data => commit('deleteUser', data))
      //lo que hace es refrescar pantalla
      commit('deleteUser', id)

    },






    //GRADOS
    fetchGasoleo({ commit }) {
      fetch('https://localhost:7064/Gasoleo')
        .then(result => result.json())
        .then(data => commit('setGasoleo', data))
    },
    //Buscar por nombre
    searchGasoleo({ commit }, name) {
      fetch('https://localhost:7064/Gasoleo/name?name=' + `${name}`)


        .then(result => result.json())

        .then(data => commit('setGasoleo', data))
    },
    //hacer el post
    addGasoleo({ commit },gasoleoInfo) {
      //commit('addUsers',userInfo)
      fetch('https://localhost:7064/Gasoleo', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(gasoleoInfo)
      })
        .then(result => result.json())
        .then(data => commit('addGasoleo', data))
    },

    deleteGasoleo({ commit }, id) {
      fetch('https://localhost:7064/Gasoleo' + `/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify
      })

        .then(result => result.json())
        .then(data => commit('deleteGasoleo', data))
      //Resetear pagina sin perderla
      commit('deleteGasoleo', id)
    },



    //Promociones

    fetchPromocion({ commit }) {
      fetch('https://localhost:7064/Promocion')
        .then(result => result.json())
        .then(data => commit('setPromocion', data))
    },
    searchPromocion({ commit }) {
      fetch('https://localhost:7064/Promocion/vigor?vigor=' + `${false}`)


        .then(result => result.json())

        .then(data => commit('setPromocion', data))
      commit('setPromocion')
    },

    deletePromocion({ commit }, id) {
      fetch('https://localhost:7064/Promocion' + `/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify
      })

        .then(result => result.json())
        .then(data => commit('deletePromocion', data))
      commit('deletePromocion', id)
    },
    //hacer el post
    addPromocion({ commit }, promocionInfo) {
      fetch('https://localhost:7064/Promocion', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(promocionInfo)
      })
        .then(result => result.json())
        .then(data => commit('addPromocion', data))
    },

  },
  modules: {
  }
})

