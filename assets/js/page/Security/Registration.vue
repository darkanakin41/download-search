<template>

    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <Registration v-if="!isAuthenticated" />
                <div class="callout success" v-if="isAuthenticated">
                    Votre compte a bien été créé et vous avez automatiquement été authentifié. Vous allez à présent être redirigé vers la page d'accueil.
                    <br />
                    Si ce n'est pas le cas,
                    <router-link :to="{name: 'home'}">cliquez-ici</router-link>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {Getter, State} from 'vuex-class';
    import Loading from "../../components/Block/Loading.vue";
    import {SecurityState} from "../../app/Store/Security/types";
    import Registration from "../../app/Security/Registration";

    const namespace: string = 'security';

    @Component({
        components: {Loading, Registration}
    })
    export default class RegistrationPage extends Vue {
        @State('security') securityState: SecurityState;
        @Getter('isAuthenticated', {namespace}) isAuthenticated: Boolean;


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

    }
</script>

<style lang="scss" scoped>
</style>
