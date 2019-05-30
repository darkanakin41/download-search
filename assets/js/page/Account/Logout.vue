<template>
    <div>
        <div class="callout text-center no-margin" v-bind:class="classObject">
            <div class="grid-container">
                <h1 class="title">{{message}}</h1>
            </div>
        </div>
        <Loading :displayed="true" :fixed="false" />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Session from "../../components/Session";
    import Loading from "../../components/Block/Loading.vue";

    @Component({
        components: {Loading}
    })
    export default class View extends Vue {
        classObject: Object = {warning : true, success : false};
        message: string;

        data() {
            return {
                classObject: {warning : true, success : false},
                message: "Deconnexion en cours",
            }
        }

        mounted() {
            setTimeout(() => {
                Session.destroy();
                this.classObject.success = true;
                this.classObject.warning = false;
                this.message = 'Vous avez bien été déconnecté';
            }, 2000);
            setTimeout(() => {
                this.$router.replace({name: 'home'});
            }, 2000);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";
</style>
