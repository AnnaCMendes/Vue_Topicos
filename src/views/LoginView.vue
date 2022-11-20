<template>
    <div id="login">
        <p>Login: <input type="text" v-model="nome"/></p>
        <p>Senha: <input type="password" v-model="senha"/></p>
        <p>{{status}}</p>
        <button @click="doLogin">Ok</button>
    </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
    name: 'loginView',
    data() {
        return {
            nome: '',
            senha: '',
            status: ''
        }
    },
    methods: {
        ...mapMutations(['setToken', 'setAutorizacao']),
        doLogin() {
            axios.post('login',
                {
                    username: this.nome,
                    password: this.senha
                })
                .then(response => {
                    console.log(response);
                    this.status = response.data.token;
                    this.setToken(response.data.token);
                    this.setAutorizacao(response.data.autorizacao);
                })
                .catch(error => console.log(error));
            this.status = this.nome + ' - ' + this.senha;
        }
    }
}
</script>
