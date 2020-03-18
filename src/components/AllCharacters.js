import React from 'react';

import CharacterListEntry from './CharacterListEntry';

function AllCharacters(props) {
    var list = props.characters.array.map(c => {
        return (
            <li key={c.id}>
                <CharacterListEntry props={c} />
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