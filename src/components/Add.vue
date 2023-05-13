
<template>
   <div >
      
    <div style="background-color: #EF9A9A;">
      <h1 style="text-align:center">
        {{ $t("header.search.caption7") }}
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
          <router-link v-if="$store.state.role==='admin'" to="/Users">
            <v-btn variant="success" color="#EF9A9A">{{ $t("header.search.button4") }}</v-btn>
          </router-link>
      <v-form @submit="onSubmit" @reset="onReset"  >
     


        <v-text-field
          id="input-1"
          v-model="form.name"
          :counter="20"
          type="text"
          :rules="rulesN"

          placeholder="Enter name" 
          required
        ></v-text-field>
        
        <v-text-field
          id="input-3"
          v-model="form.email"
          type="text"
          placeholder="Enter email"
          :rules="rulesE"
          required
        ></v-text-field>
        <v-text-field
          id="input-3"
          v-model="form.password"
          placeholder=" contraseña "
          :rules="password"
          required
        ></v-text-field>

        <v-checkbox
         id="input-1"
         v-model="form.gender"
         label="¿Es mujer?"
         :counter="20"
         placeholder="Enter woman" 
         required
       ></v-checkbox>
       <v-text-field
         id="input-1"
         label="fecha de inscripcion ,YYYY-MM-D"
         v-model="form.dateInscription"
         type="text"
         :rules="rulesins"
         placeholder="fecha de inscripcion" 
         required
       ></v-text-field>
       <v-text-field
         id="input-1"
         :rules="rulespuntos"
         v-model="form.puntosAcumulados"
         type="text"
         placeholder="Puntos acumulados" 
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
                  password:'',
                  email: '',
                  gender:undefined,
                  dateInscription:'',
                  puntosAcumulados:'',


                 
              },



              rulesN: [
        value => {
          if (value) return true

          return 'You must enter name.'
        },
      ],
      rulesND: [
        value => {
          if (value) return true

          return 'You must enter nameDegree.'
        },
      ],
      rulesE: [
       

        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      
      rulesins: [
        value => {
          if (value) return true

          return 'You must enter incripcion.'
        },
      ],
      rulespuntos: [
        value => {
          if (value) return true

          return 'You must enter note.'
        },
      ],
      password: [
        value => {
          if (value) return true

          return 'You must enter password.'
        },
      ],
                 
              
          }
      },
      methods:{
          onSubmit(){
            
              this.addUsers({
                  name: this.form.name, 
                  password: this.form.password,
                  email: this.form.email,
                  gender: this.form.gender,
                  dateInscription: this.form.dateInscription,
                  puntosAcumulados: this.form.puntosAcumulados,
              })
          },
          onReset(){
  
          },
         ...mapActions(['addUsers'])
      },}

  
  </script>
  
  <style>
  .h1{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  }
  </style>