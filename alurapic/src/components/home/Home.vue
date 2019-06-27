<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>    
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do título">
    
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        
        <meu-painel :titulo="foto.titulo">

          <imagem-responsiva v-meu-transform:scale.animate="1.2" :url="foto.url" :titulo="foto.titulo"/>
          <meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado="remove(foto)" :confirmacao="true" estilo="perigo" />

        </meu-painel>          

      </li>
    </ul>

  </div>  
</template>

<script>
import Painel from '../shared/painel/Painel';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva';
import Botao from '../shared/botao/Botao';

import transform from '../../directives/Transform';

export default {

  components: {
    'meu-painel' : Painel,
    'imagem-responsiva' : ImagemResponsiva,
    'meu-botao' : Botao
  },

  directives: {
    'meu-transform': transform
  },
  data() {

    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: '',
      mensagem: ''
    }
  },

  computed: {
  
    fotosComFiltro() {

      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  methods: {

    remove(foto) {
      
      this.$http
        .delete(`http://localhost:3000/v1/fotos/${foto._id}`)
        .then(
            () => {
              let indice = this.fotos.indexOf(foto);
              this.fotos.splice(indice, 1);
              this.mensagem = 'Foto removida com sucesso';                
            }, erro => {
              console.log(err);
            this.mensagem = 'Não foi possível remover a foto';
            }
        );
    }
  },

  created() {
    
    let promise = this.$http.get('http://localhost:3000/v1/fotos');
    promise
    .then(res => res.json())
    .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}
</script>

<style>

  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }

</style>
