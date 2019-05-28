<template>
    <div>
        <ul class="menu vertical accordion-menu" data-accordion-menu>
            <li class="drawer-toggle">
                <a data-close><i class="fas fa-times link-icon"></i> <span class="link-label">Close</span></a>
            </li>
            <li v-for="item in items">
                <template v-if="item.children === undefined">
                    <router-link :to="{name: item.name}" exact>{{item.label}}</router-link>
                </template>
                <template v-else>
                    <a>{{ item.label }}</a>
                    <ul class="vertical menu nested">
                        <li v-for="child in item.children">
                            <router-link :to="{name: child.name}" exact>
                                <i v-if="child.icon !== undefined" :class="getIconClasses(child.icon)"></i>
                                <span class="link-label">{{child.label}}</span>
                            </router-link>
                        </li>
                    </ul>
                </template>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import VueRouter from "vue-router";

    Vue.use(VueRouter);

    @Component
    export default class LeftMenu extends Vue {
        @Prop({type: Array}) items;

        getIconClasses(icon: String) {
            return icon + " link-icon";
        }
    }
</script>

<style scoped>

</style>
