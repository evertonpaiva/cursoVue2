<template>
  <div>
    <h1>{{ titulo }}</h1>
    
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo"></li>
    </ul>

  </div>  
</template>

<script>
export default {

  data() {

    return {
      titulo: 'Alurapic',
      fotos: [
        {
          url: 'http://academiawashington.com.br/wp-content/uploads/2017/09/coisas-incriveis-sobre-seu-cachorro.jpg',
          titulo: 'cachorro'
        },
        {
          url: 'http://academiawashington.com.br/wp-content/uploads/2017/09/coisas-incriveis-sobre-seu-cachorro.jpg',
          titulo: 'cachorro2'
        },
      ]      
    }

  }

}
</script>

<style>

</style>
