<template>
  <div >
     
    <div style="background-color: #EF9A9A;">
     <h1 style="text-align:center">
       {{ $t("header.search.caption6") }}
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
         <router-link to="/Promociones">
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
         placeholder="Enter descripcion"
         required
       ></v-text-field>

       <v-checkbox
         id="input-1"
         v-model="form.vigor"
         label="¿Esta en vigor?"
         :counter="20"
         placeholder="Enter vigor" 
         required
       ></v-checkbox>

       <v-text-field
         id="input-1"
         label="YYYY-MM-D"
         v-model="form.date"
         type="text"
         placeholder="Enter date" 
         
       ></v-text-field>
       <v-text-field
         id="input-2"
         v-model="form.price"
         :counter="20"
         placeholder="precio "
         required
       ></v-text-field>
       <v-text-field
         id="input-2"
         v-model="form.descuento"
         :counter="20"
         placeholder="descuento "
         required
       ></v-text-field>
       <v-text-field
         id="input-2"
         v-model="form.cantidadPersonas"
         :counter="20"
         placeholder="cantidadPersonas "
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
                 vigor:undefined,
                 date:'',
                 price:'',
                 descuento:'',
                 cantidadPersonas:''
               
                
             },
                
             
         }
     },
     methods:{
         onSubmit(){
           
             this.addPromocion({
                 name: this.form.name, 
                 description: this.form.description,
                 vigor:this.form.vigor,
                 date:this.form.date,
                 price:this.form.price,
                 descuento:this.form.descuento,
                 cantidadPersonas:this.form.cantidadPersonas
             })
         },
         onReset(){
 
         },
        ...mapActions(['addPromocion'])
     }
     
 }
 </script>
 
 <style>
 .h1{
   font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
 }
 </style>