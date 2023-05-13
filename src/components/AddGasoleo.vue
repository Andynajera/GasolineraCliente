<template>
  <div >
     
   <div style="background-color: #EF9A9A;">
     <h1 style="text-align:center">
       {{ $t("header.search.caption8") }}
       </h1>
     </div>



   <v-sheet width="340" class="mx-auto">
       <v-layout
           align-end
           fill-height
           pa-10
         >
           <div class="title font-weight-light" style="color: brown;">{{ $t("header.search.button6") }}</div>
         </v-layout>
         <router-link to="/">
           <v-btn variant="success" color="#EF9A9A">{{ $t("header.search.button4") }}</v-btn>
         </router-link>
     <v-form @submit="onSubmit" @reset="onReset"  >
    
       <v-text-field
         id="input-1"
         v-model="form.name"
         :counter="20"
         type="text"
         placeholder="Enter name" 
         required
       ></v-text-field>
       <v-text-field
         id="input-2"
         v-model="form.description"
         :counter="20"
         type="text"
         placeholder="Enter Description"
         required
       ></v-text-field>
       <v-text-field
         id="input-2"
         v-model="form.price"
         :counter="20"
         placeholder="precio"
         required
       ></v-text-field>
       <v-text-field
         id="input-2"
         v-model="form.number"
         :counter="20"
         placeholder="numero de identificacion"
         required
       ></v-text-field>
     
     <v-btn type="submit"   color="success" variant="primary">Submit</v-btn>
     <v-btn type="reset" color="error" variant="danger">Reset</v-btn>
   </v-form>
     </v-sheet>
   

</div>
 </template>
   
 
 <script>
 import { mapActions } from 'vuex'
 export default {
     data(){
         return{
             form:{ 
                 name: '', 
                 description:'',
                 price:'',
                 number:''
               
                
             },
                
             
         }
     },
     methods:{
         onSubmit(){
           
             this.addGasoleo({
                 name: this.form.name, 
                 description: this.form.description,
                 price:this.form.price,
                 number:this.form.number
             })
         },
         onReset(){
 
         },
        ...mapActions(['addGasoleo'])
     }
 }
 </script>
 
 <style>
 .h1{
   font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
 }
 </style>