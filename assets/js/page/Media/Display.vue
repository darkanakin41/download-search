<template>
    <div>
        <Header v-if="!loading && media" :media="media" />
        <div class="grid-container">
            <Loading v-if="loading" :displayed="loading" :fixed="false" />
            <div v-if="!loading && items.length > 0" class="grid grid-x grid-padding-y">
                <div class="cell medium-12" v-for="item in items">
                    <ItemCard :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Loading from "../../components/Block/Loading.vue";

    import ItemAPI from "../../app/API/ItemAPI";
    import MediaAPI from "../../app/API/MediaAPI";
    import Item from "../../app/Entity/Item";
    import Media from "../../app/Entity/Media";
    import ItemCard from "../../app/Component/Item/Card.vue";
    import Header from "../../app/Component/Media/Header.vue";

    @Component({
        components: {Header, ItemCard, Loading}
    })
    export default class Display extends Vue {
        media: Media;
        items: Array<Item>;
        loading: boolean;

        data() {
            return {
                media: null,
                loading: false,
                items: [],
            }
        }

        mounted() {
            this.loading = true;
            let id = parseInt(this.$route.params.id);
            MediaAPI.get(id, (media) => {
                this.media = media;
                this.loading = false;
                this.refreshmedias();
            });
        }

        refreshmedias() {
            this.loading = true;
            ItemAPI.getForMedia(this.media.id, (items) => {
                this.items = items;
                this.loading = false;
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";
</style>
