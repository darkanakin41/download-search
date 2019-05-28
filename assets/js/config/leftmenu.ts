// import cardRoutes from '../Page/Card/router';
// import headerRoutes from '../Page/Header/router';
// import tableRoutes from '../Page/Table/router';
// import timelineRoutes from "../Page/Timeline/router";

function createMenu(routes:Array<any>){
    let output:Array<Object> = [];

    routes.forEach(item => {
        output.push({
            label : item.meta.title,
            name : item.name,
        });
    });

    return output;
}

export default [
    {
        label: 'Accueil',
        name: 'home',
        icon: 'fa fa-home'
    },
    {
        label: 'Recherche',
        name: 'search',
        icon: 'fa fa-search'
    },
    // {
    //     label: 'Timeline',
    //     children: createMenu(timelineRoutes),
    // }
];

