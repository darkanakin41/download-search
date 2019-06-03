<script lang="ts">
    import {Component, Watch} from "vue-property-decorator";
    import FlexTable from "../../components/Table/FlexTable.vue";
    import Grid from "../../components/Grid/Grid.vue";
    import Loading from "../../components/Block/Loading.vue";
    import TabbedFilter from "../../components/Block/TabbedFilter";

    import Media from "../../app/Entity/Media";
    import LastUpdated from "./LastUpdated.vue";

    @Component({
        components: {Grid, Loading, FlexTable, TabbedFilter}
    })
    export default class LastReleased extends LastUpdated {
        sortItems(){
            this.itemsInput.sort((a:Media, b:Media) => {
                return a.releaseDate < b.releaseDate;
            });
        }

    }
</script>
