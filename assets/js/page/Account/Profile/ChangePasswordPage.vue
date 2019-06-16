 <template>
    <v-container fluid>
        <ChangePassword/>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import ChangePassword from "../../../app/Security/ChangePassword"

    @Component({
        components: {ChangePassword}
    })
    export default class ChangePasswordPage extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "../../../../libs/theming/mixins";
    @import "../../../../scss/common/config";
</style>
