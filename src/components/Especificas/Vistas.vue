<template>
  <div>
        <router-view />

      <v-container>
      <router-link  v-if="$store.state.role==='admin'"   to="/Users">
        <v-btn variant="success" color="#EF9A9A">{{ $t("header.search.caption4") }}</v-btn>
        
      </router-link>
    </v-container>
  <v-container>
      <router-link   to="/login">
        <v-btn variant="success" color="#EF9A9A">{{ $t("header.search.button2") }}</v-btn>
        
      </router-link>
    </v-container>
    <v-container>
      <router-link   v-if="$store.state.role==='userTeacher'"  to="/">
        <v-btn variant="success" color="#EF9A9A">{{ $t("header.search.button3") }}</v-btn>
        
      </router-link>
      <router-link   v-if="$store.state.role=== 'admin'"  to="/">
        <v-btn variant="success" color="#EF9A9A">{{ $t("header.search.button3") }}</v-btn>
        
      </router-link>
    </v-container>
  <v-container>
      <router-link  v-if="$store.state.role==='admin'"  to="/Promociones">
        <v-btn variant="success" color="#EF9A9A">{{ $t("header.search.button") }}</v-btn>
        
      </router-link>

    </v-container>

    <v-container>
      <router-link  v-if="$store.state.role==='userTeacher'"  to="/Promociones">
        <v-btn variant="success" color="#EF9A9A">{{ $t("header.search.button") }}</v-btn>
        
      </router-link>

    </v-container>
    

     
  <v-container>
      <router-link   v-if="$store.state.role==='userTeacher'"  to="/Users">
        <v-btn variant="success" color="#EF9A9A">{{ $t("header.search.caption4") }}</v-btn>
        
      </router-link>
     
    </v-container>
    
  <v-container>
      <router-link   v-if="$store.state.role==='userAndrea'"  to="/">
        <v-btn variant="success" color="#EF9A9A">{{ $t("header.search.button3") }}</v-btn>
        
      </router-link>

    </v-container>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>