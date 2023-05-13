<template>
<div>
  
  <ListGasoleo />
    
    <!-- <login></login> -->
</div>
</template>

<script>

import ListGasoleo from "@/components/ListGasoleo.vue";
// import Login from '@/Login';

//import Login from '@/components/Login.vue'
export default {
  name: "Home",
  

  components: {
    ListGasoleo,//Login
    
    // Login
  },
};
</script>
