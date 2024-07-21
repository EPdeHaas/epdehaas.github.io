
const ts_cams = [
    { id: "boumaboulevard",         name: "Boumaboulevard",         large: true },
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
    let table   = document.querySelector( '.video-grid' );
    let cams    = ts_cams.slice();

    let row, tile;

    let i = 0, j = 0, hadLarge = false;;
    for ( let cam of cams ) {
        if ( j == 0 ) {
            row = document.createElement( 'tr' );
            table.appendChild( row );

            if ( hadLarge ) {
                j = 2;
                hadLarge = false;
            }
        }

        if ( cam.large ) {
            tile = createLargeTile( cam );
            j = ( ++j ) % 4;
        } else {
            tile = createTile( cam );
        }

        row.appendChild( tile );
        j = ( ++j ) % 4;
    }

}

function createTile ( cam ) {
    let preview = document.createElement( 'img' );
    preview.src = `./img/${ cam.id }.png`;

    let label = document.createElement( 'label' );
    preview.innerText = cam.name;

    let link = document.createElement( 'a' );
    link.target = '_blank';
    link.href   = `${ cam.id }/`;
    link.appendChild(preview);
    link.appendChild(label);

    let tile = document.createElement( 'td' );
    tile.classList.add( 'video-grid-cell' );
    tile.appendChild( link );

    return tile;
}

function createLargeTile ( cam ) {
    let tile = createTile ( cam );
    tile.colSpan = 2;
    tile.rowSpan = 2;
    tile.classList.add( 'large-cell' );

    return tile;
}

window.addEventListener( "load", setup );
