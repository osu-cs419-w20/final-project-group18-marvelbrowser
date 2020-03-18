import React from 'react';

function Character(props) {
    var list = props.comics.map(c => {
        return (
            <li key={c.id}>
                <a href={`/comics/${c.id}`}>{c.title}</a>
            </li>
        );
    });

    return (
        <div>
            <h1>{props.info.name}</h1>
            <img src={props.info.photoUrl} alt="character" />
            <h3>Appears in the following comics:</h3>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default Character;