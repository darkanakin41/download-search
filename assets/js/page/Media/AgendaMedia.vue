<script lang="ts">
    import {Component} from "vue-property-decorator";
    import AgendaAccount from "../Account/AgendaAccount"


    @Component({})
    export default class AgendaMedia extends AgendaAccount {

        isUser(){
            return false;
        }

    }
</script>
