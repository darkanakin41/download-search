<template>
    <div class="grid-container">
        <div id="calendar">
            <FullCalendar ref="agenda" @datesRender="refreshEvents()" defaultView="dayGridMonth" :plugins="calendarPlugins" :events="events" />
        </div>
        <Loading :position="'absolute'" :displayed="loading" />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import Loading from "../../components/Block/Loading.vue";
    import MediaSeasonEpisodeAPI from "../../app/API/MediaSeasonEpisodeAPI";
    import MediaSeasonEpisode from "../../app/Entity/MediaSeasonEpisode";

    @Component({
        components: {Loading, FullCalendar}
    })
    export default class AgendaAccount extends Vue {
        calendarPlugins: Array;
        events: Array;
        loading: Boolean;

        data() {
            return {
                calendarPlugins: [dayGridPlugin],
                loading: false,
                events: [],
            }
        }

        isUser(){
            return true;
        }

        refreshEvents() {
            let calendarApi = this.$refs.agenda.getApi();
            let currentRange = calendarApi.state.dateProfile.currentRange;
            let start = currentRange.start;
            let end = currentRange.end;
            this.loading = true;
            MediaSeasonEpisodeAPI.calendar(start, end, this.isUser(), (items: Array<MediaSeasonEpisode>) => {
                this.events = [];
                items.forEach((item) => {
                    this.events.push({
                        title: item.season.media.title + " - s" + item.season.number + "e" + item.number,
                        date: this.extractYearMonthDay(item.releaseDate)
                    });
                    this.loading = false;
                });
            });
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";
    @import '~@fullcalendar/core/main.css';
    @import '~@fullcalendar/daygrid/main.css';

    .grid-container {
        position: relative;
    }
</style>
