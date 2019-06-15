<template>
    <div>
        <MediaHeader v-if="!loading && item.media" :media="item.media" />
        <v-container fluid>
            <Loading :displayed="loading" />
            <ItemContent v-if="!loading" :item="item" />
        </v-container>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Loading from "../../components/Block/Loading.vue";
    import ItemAPI from "../../app/API/ItemAPI";
    import Item from "../../app/Entity/Item";
    import MediaHeader from "../../app/Component/Media/Header.vue";
    import ItemContent from "../../app/Component/Item/Card.vue";

    @Component({
        components: {ItemContent, Loading, MediaHeader}
    })
    export default class Display extends Vue {
        loading: Boolean = true;
        item: Item;

        data() {
            return {
                item: null,
            }
        }

        mounted() {
            let id = parseInt(this.$route.params.id);

            ItemAPI.get(id, (item) => {
                this.item = item;
                this.loading = false;
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";
</style>
