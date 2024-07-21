
const ts_cams = [
    { id: "grote-markt",            name: "Grote Markt",            large: true },
    { id: "grote-markt-2",          name: "Grote Markt 2" },
    { id: "stationsweg",            name: "Stationsweg" },

    { id: "boumaboulevard",         name: "Boumaboulevard" },
    { id: "europaweg",              name: "Europaweg" },
    { id: "friesestraatweg",        name: "Friesestraatweg" },
    { id: "gasunie",                name: "Gasunie" },
    { id: "julianaplein",           name: "Julianaplein" },
    { id: "julianaplein-2",         name: "Julianaplein 2" },
    { id: "laan-corpus-den-hoorn",  name: "Laan Corpus den Hoorn" },
    { id: "overwinningsplein",      name: "Overwinningsplein" },
    { id: "paterswoldseweg",        name: "Paterswoldseweg" },
    { id: "vrijheidsplein",         name: "Vrijheidsplein" },
    { id: "winschoterdiep",         name: "Winschoterdiep" },
    { id: "zuiderplantsoen",        name: "Zuiderplantsoen" },

    //{ id: "hoofdstation",           name: "Hoofdstation" },
    //{ id: "hoofdstation-2",         name: "Hoofdstation 2" },
]

function setup () {
    let table   = document.querySelector( '.video-grid' );
    let cams    = ts_cams.slice();

    let row, tile;

    let i = 0, j = 0, hadLarge = false;;
    for ( let cam of cams ) {
        if ( j == 0 ) {
            console.log( 'create new row' );
            row = document.createElement( 'tr' );
            table.appendChild( row );

            if ( hadLarge ) {
                console.log( 'skip to cells' );
                j = 2;
                hadLarge = false;
            }
        }

        if ( cam.large ) {
            console.log( 'create a large tile' );
            tile = createLargeTile( cam );
            hadLarge = true;
            j = ( ++j ) % 4;
        } else {
            console.log( 'create a regular tile' );
            tile = createTile( cam );
        }

        row.appendChild( tile );
        j = ( ++j ) % 4;
    }

}

function createTile ( cam ) {
    let preview = document.createElement( 'img' );
    preview.src = `./${ cam.id }/image.png`;

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
