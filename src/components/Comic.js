import React from 'react';

function Comic(props) {
    console.log(props);
    var list = props.characters.map(c => {
        return (
            <li key={c.id}>
                <a href={`/characters/${c.id}`}>{c.name}</a>
            </li>
        );
    });

    return (
        <div>
            <h1>{props.info.title}</h1>
            <img src={props.info.photoUrl} alt="comic" />
            <h3>Features the following characters:</h3>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default Comic;