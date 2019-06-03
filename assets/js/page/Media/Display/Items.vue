<template>
    <div>
        <Loading v-if="loading" :displayed="loading" :fixed="false" />
        <div v-if="!loading && items.length > 0" class="grid grid-x grid-padding-y">
            <div class="cell medium-12" v-for="item in items">
                <ItemCard :item="item" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Loading from "../../../components/Block/Loading.vue";

    import ItemAPI from "../../../app/API/ItemAPI";
    import Item from "../../../app/Entity/Item";
    import ItemCard from "../../../app/Component/Item/Card.vue";

    @Component({
        components: {ItemCard, Loading}
    })
    export default class Items extends Vue {
        items: Array<Item>;
        loading: boolean;

        data() {
            return {
                loading: false,
                items: [],
            }
        }

        mounted() {
            let mediaId = parseInt(this.$route.params.id);
            this.loading = true;
            ItemAPI.getForMedia(mediaId, (items) => {
                this.items = items;
                this.loading = false;
            });
        }
    }
</script>

<style lang="scss" scoped>
</style>
