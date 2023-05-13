import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
  
    main:{
        title: 'Hello world',
        subTitle:'another title'
    },
    header:{
        search:{
            caption:'Cepsa',
            caption2:'Promotions Information',
            caption3:'Login',
            caption4:'Users',
            captio5:'Users Details',
            caption6:'Add Promotions',
            caption7:'Add Users',
            caption8:'Add diesel oil types',
            caption9:'Promotions List',
            caption10:'Oil list',



            button:'Payments',
            button2:'Login',
            button3:'Home',
            button4:'Back',
            button5:'See details',
            button6:'Add',
            button7:'Delete',
            button9:'Search by name',
            button10:'Search by diesel oil',
            button11:'Expired',
            button12:' See all'
        }
    }
  },
  es: {
     errors:{
      invalidLogin: 'Usuario o contraseña incorrectos'
     },
    main:{
        title: 'hola mundo',
        subTitle:'otro titulo'
    },
    header:{
        search:{
            caption:'Cepsa',
            caption2:'Informacion de Promociones',
            caption3:'Iniciar sesion',
            caption4:'Usuarios',
            caption5:'Detalles de los Usuarios',
            caption6:'Añadir promociones',
            caption7:'Añadir Usuarios',
            caption8:'Añadir Tipos de gasoleo',
            caption9:'Lista de Promociones',
            caption10:'Tipos  de Gasoleo',



            button:'Promociones',
            button2:'Iniciar sesion',
            button3:'Menu',
            button4:'Atras',
            button5:'Ver Detalles',
            button6:'Añadir',
            button7:'Borrar',
            button9:'Buscar por nombre',
            button10:'Buscar por gasoleo',
            button11:' Caducados',
            button12:' Ver todos'


        }
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'es', // set locale
  messages, // set locale messages
})

export{i18n}