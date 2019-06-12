<template>
    <div>
        <div class="callout success">
            <div class="grid-container">
                <h1 class="title">Authentification</h1>
                <p>Veuillez renseigner vos informations d'authentification</p>
            </div>
        </div>
        <div class="grid-container">
        <Login v-if="!securityState.loading && !isAuthenticated"/>
        <Loading v-if="securityState.loading"/>
        <div class="callout success" v-if="isAuthenticated">
            Vous avez été authentifié, vous allez être redirigé vers la page d'accueils dans quelques instants ...
            <br/>
            Si ce n'est pas le cas, <router-link :to="{name: 'home'}">cliquez-ici</router-link>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {Action, Getter, State} from 'vuex-class';
    import Loading from "../../components/Block/Loading.vue";
    import {SecurityState} from "../../app/Store/Security/types";
    import Login from "../../app/Security/Login";

    const namespace: string = 'security';

    @Component({
        components: {Loading, Login}
    })
    export default class Home extends Vue {
        @State('security') securityState: SecurityState;
        @Getter('isAuthenticated', {namespace}) isAuthenticated: Boolean;

        mounted() {
            this.onAuthenficationUpdate();
        }

        @Watch('isAuthenticated')
        onAuthenficationUpdate(){
            if(this.isAuthenticated){
                setTimeout(() => {
                    this.$router.push({name:'home'});
                }, 5000);
            }
        }

    }
</script>

<style lang="scss" scoped>
</style>
