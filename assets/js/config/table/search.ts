export default {
    fields: {
        title: {
            label : "Title",
            type: "string"
        },
        genres: {
            label : "Genre(s)",
            type: "array",
            join: ", ",
        },
        quality: {
            label : "Qualité",
            type: "string"
        },
        lastPart: {
            label : "Dernière Partie",
            type: "string"
        },
        source: {
            label : "Site Source",
            type: "object",
            field: 'title'
        },
        fullUrl: {
            label : "Voir",
            type: "url",
            icon: 'fa fa-eye'
        },
    }
}
