
<template>
  <v-app>
    <v-app class="”head”">
      <!--header---->
      <Header>
      </Header>
      <!--Vistas-->
      <Vistas>
      </Vistas>
    </v-app>
    <!--footer-->
    <Footer>
    </Footer>
  </v-app>
</template>

<script>
import Header from '@/components/Especificas/Header.vue';
import Footer from './components/Especificas/Footer.vue';
import Vistas from './components/Especificas/Vistas.vue';
import store from "@/store";
export default {
  created() {
    store.dispatch("fetchUsers"),
      store.dispatch("fetchGasoleo"),
      store.dispatch("fetchPromocion");
  },


  components: {
    Header,
    Footer,
    Vistas
},
};
</script>


   