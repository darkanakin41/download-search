import itemRoutes from "../page/Item/router";

function createMenu(routes:Array<any>){
    let output:Array<Object> = [];

    routes.forEach(item => {
        if(!item.meta.leftMenu){
            return;
        }
        output.push({
            name : item.name,
            label : item.meta.title,
            icon: item.meta.icon
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
        label: 'Items',
        children: createMenu(itemRoutes),
    }
];

