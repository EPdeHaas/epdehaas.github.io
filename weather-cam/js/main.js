
const videos = [
    { id: "boumaboulevard",         name: "Boumaboulevard" },
    { id: "europaweg",              name: "Europaweg" },
    { id: "friesestraatweg",        name: "Friesestraatweg" },
    { id: "gasunie",                name: "Gasunie" },
    { id: "grote-markt",            name: "Grote Markt" },
    { id: "grote-markt-2",          name: "Grote Markt 2" },
    { id: "hoofdstation",           name: "Hoofdstation" },
    { id: "hoofdstation-2",         name: "Hoofdstation 2" },
    { id: "julianaplein",           name: "Julianaplein" },
    { id: "julianaplein-2",         name: "Julianaplein 2" },
    { id: "laan-corpus-den-hoorn",  name: "Laan Corpus den Hoorn" },
    { id: "overwinningsplein",      name: "Overwinningsplein" },
    { id: "paterswoldseweg",        name: "Paterswoldseweg" },
    { id: "stationsweg",            name: "Stationsweg" },
    { id: "vrijheidsplein",         name: "Vrijheidsplein" },
    { id: "winschoterdiep",         name: "Winschoterdiep" },
    { id: "zuiderplantsoen",        name: "Zuiderplantsoen" },
]

function setup () {
    let table = document.querySelector('.video-grid');

    for ( let i of videos ) {
        console.log( i );
    }
}

window.addEventListener( "load", setup );
