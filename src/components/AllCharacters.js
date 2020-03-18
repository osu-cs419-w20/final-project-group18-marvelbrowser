import React from 'react';

import CharacterListEntry from './CharacterListEntry';

function AllCharacters(props) {
    console.log(props.characters);
    var list = props.characters.map(c => {
        return (
            <li key={c.id}>
                <CharacterListEntry character={c} />
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

export default AllCharacters;