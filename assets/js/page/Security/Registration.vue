<template>
    <div>
        <div class="callout success">
            <div class="grid-container">
                <h1 class="title">Inscription</h1>
                <p>Veuillez renseigner les informations suivantes</p>
            </div>
        </div>
        <div class="grid-container">

            <form v-on:submit.prevent="onSubmitMethod()" v-if="!isAuthenticated && !securityState.loading">
                <div class="callout alert" v-if="securityState.error !== null">{{securityState.error}}</div>
                <input v-model="username" type="text" placeholder="Identifiant" />
                <input v-model="email" type="email" placeholder="Votre email" />
                <input v-model="password" type="password" placeholder="Mot de passe" />
                <input v-model="passwordConfirmed" type="password" placeholder="Confirmez votre mot de passe" />
                <button :disabled="!isFormValid()" class="button success expanded">Connexion</button>
            </form>
            <Loading v-if="securityState.loading" />
            <div class="callout success" v-if="isAuthenticated">
                Votre compte a bien été créé et vous avez automatiquement été authentifié. Vous allez à présent être redirigé vers la page d'accueil.
                <br />
                Si ce n'est pas le cas,
                <router-link :to="{name: 'home'}">cliquez-ici</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {Action, Getter, State} from 'vuex-class';
    import Loading from "../../components/Block/Loading.vue";
    import {SecurityState} from "../../app/Store/Security/types";

    const namespace: string = 'security';

    @Component({
        components: {Loading}
    })
    export default class Registration extends Vue {
        @State('security') securityState: SecurityState;
        @Getter('isAuthenticated', {namespace}) isAuthenticated: Boolean;
        @Action('register', {namespace}) register: any;

        username: String;
        password: String;
        passwordConfirmed: String;
        email: String;


        data() {
            return {
                username: "",
                password: "",
                passwordConfirmed: "",
                email: "",
            }
        }

        mounted() {
            this.onAuthenficationUpdate();
        }

        @Watch('isAuthenticated')
        onAuthenficationUpdate() {
            if (this.isAuthenticated) {
                setTimeout(() => {
                    this.$router.push({name: 'home'});
                }, 5000);
            }
        }

        isFormValid() {
            if (this.username.trim().length === 0) {
                return false;
            }
            if (!Registration.validateEmail(this.email.trim())) {
                return false;
            }
            if (this.password.trim().length === 0) {
                return false;
            }
            if (this.password.trim() !== this.passwordConfirmed.trim()) {
                return false;
            }
            return !this.securityState.loading;
        }

        onSubmitMethod() {
            this.register({username: this.username.trim(), password: this.password.trim(), email: this.email.trim()});
        }

        static validateEmail(email) {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

    }
</script>

<style lang="scss" scoped>
</style>
