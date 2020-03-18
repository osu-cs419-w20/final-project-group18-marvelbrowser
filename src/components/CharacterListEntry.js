import React from 'react';

function CharacterListEntry(props) {
    return (
        <div>
            <a href={`/characters/${props.character.id}`}>{props.character.name}</a>
        </div>
    );
}

export default CharacterListEntry;