<template>
    <section>
        <h1 class="section-title">Connexion</h1>
        <form v-on:submit.prevent="onSubmitMethod" v-if="!security.loading">
            <div class="callout alert" v-if="security.error !== null">{{security.error}}</div>
            <input v-model="username" type="text" placeholder="Identifiant"/>
            <input v-model="password" type="password" placeholder="Mot de passe"/>
            <button :disabled="username.length === 0 || password.length === 0 || security.loading" class="button success expanded">Connexion</button>
        </form>
        <Loading v-if="security.loading" :fixed="false"/>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import { State, Action } from 'vuex-class';
    import Loading from "../../components/Block/Loading.vue";
    import {SecurityState} from "../Store/Security/types";

    const namespace: string = 'security';
    @Component({
        components: {Loading}
    })
    export default class Login extends Vue {
        @State('security') security: SecurityState;
        @Action('login', {namespace}) login: any;
        username:String;
        password:String;

        data() {
            return {
                username:"",
                password:"",
            }
        }

        onSubmitMethod(){
            this.login({login:this.username, password:this.password});
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

    section{
        padding : .5rem 1rem;
        .section-title{
            font-size : 1.2rem;
            font-weight: $weightBold;
            &::after{
                display:block;
                height: 4px;
                content: " ";
                background : linear-gradient(to right, $mainColor, transparentize($mainColor, 1));
                width: 65%;
            }
        }
        .grid{
            margin : 0;
        }
    }
</style>
