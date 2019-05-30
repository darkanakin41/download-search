export default {
    fields: {
        title: {
            label: "Title",
            type: "string"
        },
        category: {
            label: "Catégorie",
            type: "string",
        },
        quality: {
            label: "Qualité",
            type: "string"
        },
        language: {
            label: "Langue",
            type: "string"
        },
        source: {
            label: "Site Source",
            type: "object",
            field: 'title'
        },
        view: {
            label: "Detail",
            type: "route",
            route: "item-view",
            icon: 'fa fa-eye',
            class: 'text-center',
            routeParams: {
                id: 'id'
            }
        }
    }
}
