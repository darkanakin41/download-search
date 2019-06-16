<template>
    <v-card class="elevation-12">
        <v-toolbar dark color="primary">
            <v-toolbar-title>Modifier mon mot de passe</v-toolbar-title>
        </v-toolbar>
        <v-form v-on:submit.prevent="onSubmitMethod()">
            <v-card-text>
                <div class="callout alert" v-if="security.error !== null">{{security.error}}</div>
                <div class="callout success" v-if="message.trim() !== ''">{{message}}</div>
                <v-text-field prepend-icon="lock" name="password" label="Mot de passe actuel" type="password" v-model="password"></v-text-field>
                <v-text-field prepend-icon="lock" name="newPassword" label="Nouveau mot de passe" type="password" v-model="newPassword"></v-text-field>
                <v-text-field prepend-icon="lock" name="newPasswordConfirmation" label="Confirmation du nouveau mot de passe" type="password" v-model="newPasswordConfirmation"></v-text-field>
                <Loading v-if="security.loading" :fixed="false" />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="!isFormValid()" color="primary" type="submit">Modifier</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {Action, Getter, State} from 'vuex-class';
    import Loading from "../../components/Block/Loading.vue";
    import {SecurityState} from "../Store/Security/types";

    const namespace: string = 'security';
    @Component({
        components: {Loading}
    })
    export default class ChangePassword extends Vue {
        @State('security') security: SecurityState;
        @Action('changePassword', {namespace}) changePassword: any;
        @Getter('isLoading', {namespace}) isLoading: any;
        password: String;
        newPassword: String;
        newPasswordConfirmation: String;

        message = "";

        data() {
            return {
                message: "",
                password: "",
                newPassword: "",
                newPasswordConfirmation: "",
            }
        }

        isFormValid() {
            if (this.password.trim().length === 0) {
                return false;
            }
            if (this.newPassword.trim().length === 0) {
                return false;
            }
            if (this.newPassword.trim() !== this.newPasswordConfirmation.trim()) {
                return false;
            }
            return !this.security.loading;
        }

        onSubmitMethod() {
            this.changePassword({password: this.password.trim(), new_password: this.newPassword.trim()});
        }

        @Watch('isLoading')
        onIsLoadingChange(){
            if(this.security.error === null){
                this.message = "Votre mot de passe a bien été changé";
                this.password = "";
                this.newPassword = "";
                this.newPasswordConfirmation = "";
            }else{
                this.message = "";
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";
</style>
