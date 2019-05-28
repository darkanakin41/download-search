<template>
    <div class="table-list">
        <div class="row row-header">
            <span v-for="(c,f) in config.fields" :class="c.class" v-html="getTitle(f)"></span>
        </div>
        <template v-for="item in items">
            <div class="spacer"></div>
            <div class="row">
                <span v-for="(c,f) in config.fields" :class="c.class"><span v-html="getValue(item, f)"></span></span>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";

    @Component
    export default class FlexTable extends Vue {
        @Prop({type: Array}) itemsInput;
        @Prop({type: Object}) configInput;

        config;
        items;

        data() {
            return {
                items: this.itemsInput,
                config: this.configInput,
            };
        }

        getTitle(fieldname:string){
            if(this.config.fields[fieldname] === undefined){
                return "";
            }
            if(this.config.fields[fieldname].label !== undefined){
                return this.config.fields[fieldname].label;
            }
            return fieldname;
        }

        getValue(item:Object, fieldname:string){
            if(this.config.fields[fieldname] === undefined){
                return "";
            }

            // Processing Object type
            if(this.config.fields[fieldname].type === 'object'){
                return this.getValue(item[fieldname], this.config.fields[fieldname].field);
            }

            // Processing Image type
            if(this.config.fields[fieldname].type === 'image'){
                return '<img src="' + item[fieldname] + '" alt="' + fieldname + '" />';
            }

            // Processing Array type
            if(this.config.fields[fieldname].type === 'array'){
                let join = this.config.fields[fieldname].join;
                if(join === undefined){
                    join = ', ';
                }
                return item[fieldname].join(join);
            }

            // Processing URL type
            if(this.config.fields[fieldname].type === 'url'){
                let label = [];
                if(this.config.fields[fieldname].icon !== undefined){
                    label.push('<i class="' + this.config.fields[fieldname].icon + '"></i>');
                }
                if(this.config.fields[fieldname].text !== undefined){
                    label.push(this.config.fields[fieldname].text);
                }
                if(label.length === 0){
                    label.push(fieldname);
                }
                return '<a href="' + item[fieldname] + '" target="_blank">' + label.join(' ') + '</a>';
            }
            // Default value
            return item[fieldname];
        }

        @Watch('itemsInput')
        onItemsInputChange() {
            this.items = this.itemsInput;
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

    .table-list {
        display: table;

        width: 100%;
        padding: 1rem 1.2rem;

        @include make-card(white, 0, 0);

        & > .row {
            display: table-row;

            & > * {
                display: table-cell;
                padding: .8rem 1rem;
                vertical-align: middle;
            }
        }

        .row {
            padding: 15px;
            border-bottom: 1px solid transparentize(black, .45);

            &:last-child {
                border: none;
            }

            .image {
                width: 72px;

                img {
                    border-radius: 50%;
                    height: 40px;
                }
            }

            .type,
            .show,
            .edit,
            .delete {
                text-align: center;
                width: 60px;

                a {
                    color: #333;
                    padding: 5px 10px;
                    @include transition(all .2s linear);

                    &:hover {
                        border-radius: 3px;
                        background: transparentize($mainColor, .2);
                        color: white;
                    }
                }
            }

            .type {
                .fa {
                    font-size: 2.5rem;
                }
            }
        }

        & > .row-header {
            color: $mainColor;
            background: transparent;
            position: relative;
            @include opacity(.8);

            a {
                position: relative;

                &.asc,
                &.desc {
                    padding-right: 24px;

                    &::after {
                        position: absolute;
                        right: 0;
                        top: -3px;
                        padding: 0 5px;
                        font-family: $fontawesomeFamily;
                        font-weight: $fontawesomeSolidWeight;
                    }
                }

                &.asc {
                    &::after {
                        content: '\F15D';
                    }
                }

                &.desc {
                    &::after {
                        content: '\F15E';
                    }
                }
            }
        }

        .spacer {
            height: 10px;
        }

        & + .row-footer {
            display: flex;
            padding: 1rem 1.2rem;
            color: $mainColor;
            background: transparent;
            @include opacity(.8);
            @include box-shadow(none);

            & > * {
                display: block;
                flex: 1;
            }
        }
    }
</style>
