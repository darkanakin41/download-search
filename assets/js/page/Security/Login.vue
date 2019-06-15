<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <Login v-if="!isAuthenticated" />
                <div class="callout success" v-if="isAuthenticated">
                    Vous avez été authentifié, vous allez être redirigé vers la page d'accueils dans quelques instants ...
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
    import Login from "../../app/Security/Login";

    const namespace: string = 'security';

    @Component({
        components: {Loading, Login}
    })
    export default class LoginPage extends Vue {
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
