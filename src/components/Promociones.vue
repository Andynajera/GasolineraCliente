<template>
  <!--header-->
  <div>
    <!--i18n-->

    <v-card class="mx-auto" max-="1500">
      
      <v-container>
       
      <v-toolbar-title>      <h1 style="text-align: center">
        {{ $t("header.search.caption9") }}
      </h1></v-toolbar-title>
    </v-container>

        <!--Buscar por grado-->
            
       
<v-container>
       <!--<v-btn @click="launchQuery">{{ $t("header.search.button9") }}</v-btn>--> 
       <v-btn id="vigor"  v-model="vigor" variant="success" color="#B2EBF2" @click="fetchPromocion"> {{ $t("header.search.button12") }}</v-btn>

        <v-btn id="vigor"  v-model="vigor" variant="success" color="#B2EBF2" @click="launchQuery"> {{ $t("header.search.button11") }}</v-btn>
        <router-link to="/AddPromociones" >
        <v-btn variant="success" id="vigor" color="#EF9A9A">{{ $t("header.search.button6") }}</v-btn>
        
      </router-link>
        
        <!---->


        <v-row dense class="cards">
          <v-col v-for="item in Promociones" :key="item.id" cols="12">
            <v-card class="promocion" color="white" theme="dark" width="500px">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5">
                    {{ item.name }}
                  </v-card-title>

                  <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                  <v-card-subtitle>{{ item.vigor }}</v-card-subtitle>
                  <v-card-subtitle>{{ item.date }}</v-card-subtitle>
                  <v-card-subtitle>{{ item.price }}</v-card-subtitle>
                  <v-card-subtitle>{{ item.descuento }}</v-card-subtitle>
                  <v-card-subtitle>{{ item.cantidadPersonas }}</v-card-subtitle>
                  
                </div>

                <v-avatar class="ma-3" size="250" rounded="0">
                  <v-img
                    src="../assets/promociones.jpg"
                  ></v-img>
                </v-avatar>
                <!--Boton con Role de administrador para borrar-->
              </div>
              <v-btn v-if="$store.state.role==='admin'" @click="onDeletePromocion(item.id)"
                  color="#EF9A9A"
                  variant="primary" class="boton" >{{ $t("header.search.button7") }}, {{ item.id }}</v-btn>
            </v-card>
          </v-col>
        </v-row>
        </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      show: false,
    };
  },

  name: "Promociones",
  computed: {
    ...mapState(["Promociones"]),
  },
  methods: {
    ...mapActions({ deletePromocion: "deletePromocion",searchPromocion: "searchPromocion",fetchPromocion:"fetchPromocion" }),
/*
    launchQuery() {
      if(this.name){
        this.searchPromocion(this.name);
        return
      }
      this.fetchPromocion();
    }, 
*/
    
onDeletePromocion(id) {
      this.deletePromocion(id);
    },
    
    launchQuery() {
      if(this.vigor){
        this.searchPromocion (this.vigor);
        return
      }
      
      this.fetchPromocion();
    }, 
     

       vigor(){},
       name(){}
    },

  }
</script>

<style>
.text-green input {
  background-color: rgb(217, 217, 217);
  width: 20px;
}

.boton{
  margin-left: 75%;
}

.cards{
  display: grid;
  grid-template-columns: 600px 600px;
}

</style>