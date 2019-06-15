<template>
    <v-card class="elevation-12">
        <v-toolbar dark color="primary">
            <v-toolbar-title>Connexion</v-toolbar-title>
        </v-toolbar>
        <v-form v-on:submit.prevent="onSubmitMethod()">
            <v-card-text>
                <div class="callout alert" v-if="security.error !== null">{{security.error}}</div>
                <v-text-field prepend-icon="person" name="login" label="Identifiant" type="text" v-model="username"></v-text-field>
                <v-text-field prepend-icon="mail" name="email" label="Adresse e-mail" type="text" v-model="email"></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Mot de passe" type="password" v-model="password"></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="passwordConfirmed" label="Confirmation de mot de passe" type="password" v-model="passwordConfirmed"></v-text-field>
                <Loading v-if="security.loading" :fixed="false" />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="!isFormValid()" color="primary" type="submit">Inscription</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {Action, State} from 'vuex-class';
    import Loading from "../../components/Block/Loading.vue";
    import {SecurityState} from "../Store/Security/types";

    const namespace: string = 'security';
    @Component({
        components: {Loading}
    })
    export default class Registration extends Vue {
        @State('security') security: SecurityState;
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
            return !this.security.loading;
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
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";
</style>
