<template>
  <!--header-->
  <div>
    <!--i18n-->

    <v-card class="mx-auto" max-="1500">
      <v-toolbar-title>      <h1 style="text-align: center">
        {{ $t("header.search.caption10") }}
      </h1></v-toolbar-title>
      <div class="tittle">LA ENERGÍA QUE TE DA MÁS</div>
      <p class="parrafo">En Cepsa nuestro compromiso es ofrecerte siempre los mejores servicios y productos. <br>
         Por eso, ponemos todo nuestro esfuerzo en seguir superándonos cada día para poder llevar <br> hasta tu hogar la energía que te da más.</p>
      <v-container>
        <router-link   v-if="$store.state.role==='admin'"  to="/addGasoleo">
        <v-btn variant="success" color="#EF9A9A">{{ $t("header.search.button6") }}</v-btn>
        
      </router-link>
    </v-container>

        <!--Buscar por grado-->
        <v-container  >      
            <v-text-field
        
          class="text-green"
          type="text"
          v-model="name"
          clearable
          hide-details="auto"
          label="Filled"
          placeholder="Search"
          filled
          rounded
          dense
          single-line
          append-icon="mdi-magnify"
         
        />
        <v-btn @click="launchQuery">{{ $t("header.search.button9") }}</v-btn>

        <!---->


        <v-row dense class="cards">
          <v-col v-for="item in Gasoleo" :key="item.id" cols="12">
            <v-card id="grid"  color="white"  style="width: 700px"   theme="dark">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div id="grid">
                  <v-card-title class="text-h5">
                    {{ item.name }}
                  </v-card-title >

                  <v-card-subtitle >{{ item.description }}</v-card-subtitle>
                  <v-card-subtitle>{{ item.contamina }}</v-card-subtitle>
                  <v-card-subtitle>{{ item.date }}</v-card-subtitle>
                  <v-card-subtitle>{{ item.price }}</v-card-subtitle>
                  <v-card-subtitle>{{ item.number }}</v-card-subtitle>
                </div>

                <v-avatar class="ma-3" size="325" rounded="0">
                  <v-img
                    src="../assets/gasoleo.jpg"
                  ></v-img>
                </v-avatar>
                <!--Boton con Role de administrador para borrar-->
                <v-btn  v-if="$store.state.role==='admin'" @click="onDeleteGasoleo(item.id)"
                  color="#EF9A9A"
                  variant="primary"
                  >{{ $t("header.search.button7") }}, {{ item.id }}</v-btn>
              </div>

            </v-card>
            
          </v-col>
        </v-row>
      </v-container>
      <v-img  alt="Vue logo" src="../assets/mas.jpg"
      
      height="500px"
      cover
    ></v-img>
   



    <v-card

>
 

  
  <div>





  <v-sheet width="300" class="mx-auto">

<v-form ref="form">
<v-text-field

  v-model="username"
  type="text"
  label="username"
  required
></v-text-field>

<v-text-field
  v-model="password"
  type="password"
  label="password"
  required
></v-text-field>

         <v-btn @click.prevent="doLogin" >Login </v-btn>
  
 
  </v-form>
  </v-sheet>
</div>
</v-card>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Login from './Login.vue';

export default {
  components: { Login },
  data() {
    return {
      username:'',
    password:'',

    drawer: false,
      group: null,

      show: false,
      alignments: [
        'start',
        'center',
        'end',
      ],
      
    };
    
  },
  watch: {
      group () {
        this.drawer = false
      },
    },

  name: "ListGasoleo",
  computed: {
    ...mapState(["Gasoleo"]),
  },
  methods: {
    ...mapActions({ deleteGasoleo: "deleteGasoleo",searchGasoleo: "searchGasoleo",fetchGasoleo:"fetchGasoleo" }),

    launchQuery() {
      if(this.name){
        this.searchGasoleo(this.name);
        return
      }
      this.fetchGasoleo();
    }, 
    onDeleteGasoleo(id) {
      this.deleteGasoleo(id);
    },
    name(){
      
    },
    doLogin(){
  this.$store.dispatch('login',{username : this.username,password: this.password})
  .then(ret =>{
    if(!ret){
    alert(this.$t(errors.invalidLogin))
  }
  })

}

  },
};
</script>

<style>
.text-green input {
  background-color: rgb(217, 217, 217);
  width: 20px;
}
.grid{
 
  display: grid;
  grid-template-columns: 50px 300px;
  grid-template-rows: 200px 75px;


}
.tittle{
font-size: 90px;
color:#212121
;
display: flex;
justify-content: center;
}
.parrafo{
  font-size: 20px;
color:#212121;
display: flex;
justify-content: center;
}

.cards{
  display: grid;
  grid-template-columns: 600px 600px;
}

</style>