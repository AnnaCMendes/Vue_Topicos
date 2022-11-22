<template>
  <div>
    <form @submit.prevent="buscar">
      <h2>Anotações Essenciais</h2>
      <div class="form-group">
        <label for="trecho">Trecho</label>
        <input
          type="text"
          id="trecho"
          class="form-control"
          autofocus
          v-model="trecho"
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Buscar
      </button>
    </form>
    <br />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>texto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="anotacao in anotacoes" :key="anotacao.id">
          <td>{{ anotacao.id }}</td>
          <td>{{ anotacao.usuario.nome }}</td>
          <td>{{ anotacao.texto }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
  import axios from 'axios'
  import { mapState } from 'vuex'
  export default {
    name: 'AnotacaoView',
    data() {
      return {
        trecho: '',
        anotacoes: []
      }
    },
    computed: {
      ...mapState(['autorizacao'])
    },
    methods: {
      buscar() {
          if (this.trecho == ""){ 
              axios.get('/anotacao')
              .then(res => {
                  console.log(res);
                  this.anotacoes=res.data;
                })
                .catch(error => console.log(error))
            }
            
            else {
            console.log(this.trecho)
            axios.get('/anotacao/'+ this.trecho)
            .then(res => {
                this.anotacoes=res.data;
                })
            .catch(error => console.log(error))}

      },
      atualizar () {
        axios.get('/anotacao' + this.usuario, 
            { headers: { Accept: 'application/json' } })
          .then(res => {
            console.log(res)
            this.anotacoes = res.data
          })
          .catch(error => console.log(error))
      }
    },
    created () {
      this.buscar()
    }
  }
  </script>