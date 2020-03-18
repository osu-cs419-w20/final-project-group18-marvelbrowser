import React from 'react';

import ComicListEntry from './ComicListEntry';

function AllComics(props) {
    console.log(props.comics);
    var list = props.comics.map(c => {
        return (
            <li key={c.id}>
                <ComicListEntry comic={c} />
            </li>
        )
    });

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default AllComics;