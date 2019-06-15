<template>
    <v-card class="elevation-12">
        <v-toolbar dark color="primary">
            <v-toolbar-title>Connexion</v-toolbar-title>
        </v-toolbar>
        <v-form v-on:submit.prevent="onSubmitMethod()">
            <v-card-text>
                <div class="callout alert" v-if="security.error !== null">{{security.error}}</div>
                <v-text-field prepend-icon="person" name="login" label="Identifiant" type="text" v-model="username"></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" label="Mot de passe" type="password" v-model="password"></v-text-field>
                <Loading v-if="security.loading" :fixed="false" />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="username.length === 0 || password.length === 0 || security.loading" color="primary" type="submit">Login</v-btn>
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
    export default class Login extends Vue {
        @State('security') security: SecurityState;
        @Action('login', {namespace}) login: any;
        username: String;
        password: String;

        data() {
            return {
                username: "",
                password: "",
            }
        }

        onSubmitMethod() {
            this.login({login: this.username, password: this.password});
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";
</style>
