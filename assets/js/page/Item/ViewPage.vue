<template>
    <div class="grid-container">
        <Loading v-if="loading" :displayed="loading" :fixed="false" />
        VIEW
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Loading from "../../components/Block/Loading.vue";
    import ItemAPI from "../../app/API/ItemAPI";
    import Item from "../../app/Entity/Item";

    @Component({
        components: {Loading}
    })
    export default class ViewPage extends Vue {
        loading: Boolean = true;
        item: Item;

        mounted() {
            let id = parseInt(this.$route.params.id);

            ItemAPI.retrieve(id, (response) => {
                this.item = ItemAPI.convert(response.data);
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

    .search-form {
        position: relative;

        &::before {
            font-family: $fontawesomeFamily;
            content: '\f002';
            font-weight: $fontawesomeSolidWeight;
            display: block;
            position: absolute;
            top: 0.4rem;
            left: 0.9rem;
            z-index: 1;
            font-size: 1.75rem;
            color: #8a8a8a;
        }

        input[name="search"] {
            padding-left: 3rem;
            font-size: 1.3rem;
            height: 3.5rem;
            font-weight: 300;
            border: 1px solid #e0e0e0;
            background: rgb(254, 254, 254) none repeat scroll 0 0;
        }
    }

    .tab-container {
        background: $dark;
    }
</style>
