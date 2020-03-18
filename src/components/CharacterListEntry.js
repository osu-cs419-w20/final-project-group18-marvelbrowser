import React from 'react';

function CharacterListEntry({ id, name }) {
    return (
        <div>
            <a href={`/characters/${id}`}>{name}</a>
        </div>
    )
}

export default CharacterListEntry;