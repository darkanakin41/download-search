import accountRoutes from "../page/Account/router";
import itemRoutes from "../page/Item/router";
import mediaRoutes from "../page/Media/router";

/**
 * @param routes
 * @return Array<Object>
 */
function createMenu(routes: Array<any>) {
    let output: Array<Object> = [];

    routes.forEach(item => {
        if (!item.meta.leftMenu) {
            return;
        }
        output.push({
            name: item.name,
            label: item.meta.title,
            icon: item.meta.icon,
            connected: item.meta.connected||false,
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
    {
        label: 'Mon Compte',
        children: createMenu(accountRoutes),
    }
];
export default routes;

