<template>
    <v-container fluid>
        <v-layout>
            <v-flex xs12 md3>
                <v-container fluid>
                    <Card />
                    <v-list>
                        <v-list-tile>
                            <v-btn :to="{name:'account-profile-password'}" block exact>
                                <i class="fa fa-unlock-alt"></i> Modifier mon mot de passe
                            </v-btn>
                        </v-list-tile>
                    </v-list>
                </v-container>
            </v-flex>
            <v-flex xs12 md9>
                <router-view></router-view>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {State} from "vuex-class";
    import {SecurityState} from "../../app/Store/Security/types";
    import Card from "../../app/Component/Account/Card.vue";

    @Component({
        components: {Card}
    })
    export default class Profile extends Vue {
        @State('security') securityState: SecurityState;
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";
</style>
