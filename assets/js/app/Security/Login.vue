<template>
    <section>
        <h1 class="section-title">Connexion</h1>
        <form v-on:submit.prevent="onSubmitMethod" v-if="!loading">
            <div class="callout alert" v-if="error !== ''">{{error}}</div>
            <input v-model="login" type="text" placeholder="Identifiant"/>
            <input v-model="password" type="password" placeholder="Mot de passe"/>
            <button :disabled="login.length === 0 || password.length === 0 || loading" class="button success expanded">Connexion</button>
        </form>
        <Loading v-if="loading" :fixed="false"/>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Loading from "../../components/Block/Loading.vue";
    import SecurityAPI from "../API/SecurityAPI";
    import User from "../Entity/User";

    @Component({
        components: {Loading}
    })
    export default class Login extends Vue {
        loading:Boolean;
        login:String;
        password:String;
        user:User;
        error:String;

        data() {
            return {
                loading: false,
                login:"",
                password:"",
                user:null,
                error:"",
            }
        }

        onSubmitMethod(){
            this.loading = true;
            SecurityAPI.login(this.login, this.password, (user) => {
                this.$emit('input', user);
                this.loading = false;
                this.$router.push({name : 'home'});
            }, (message) => {
                this.error = message;
                this.loading = false;
            });
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
