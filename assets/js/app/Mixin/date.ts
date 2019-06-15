import Vue from 'vue';

let dateMixins = {
    methods: {
        /**
         * Format the date in dd/mm/yyyy
         * @param date
         */
        formatDate(date:Date|undefined){
            if(date === undefined){
                return "";
            }

            let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
            let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
            let yyyy = date.getFullYear();

            return (dd + "/" + MM + "/" + yyyy);
        },
        /**
         * Format the date in dd/mm/yyyy
         * @param date
         */
        extractYearMonthDay(date:Date|undefined){
            if(date === undefined){
                return "";
            }

            let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
            let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
            let yyyy = date.getFullYear();

            return (yyyy + "-" + MM + "-" + dd);
        }
    }
};

Vue.mixin(dateMixins);

export default dateMixins;
