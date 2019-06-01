import itemRoutes from "../page/Item/router";
import mediaRoutes from "../page/Media/router";

function createMenu(routes: Array<any>) {
    let output: Array<Object> = [];

    routes.forEach(item => {
        if (!item.meta.leftMenu) {
            return;
        }
        output.push({
            name: item.name,
            label: item.meta.title,
            icon: item.meta.icon
        });
    });

    return output;
}

let routes = [
    {
        label: 'Accueil',
        name: 'home',
        icon: 'fa fa-home'
    },
    {
        label: 'Items',
        children: createMenu(itemRoutes),
    },
    {
        label: 'Media',
        children: createMenu(mediaRoutes),
    },
    // {
    //     label: 'Mon Compte',
    //     children: createMenu(securityRoutes),
    // }
];

export default routes;

