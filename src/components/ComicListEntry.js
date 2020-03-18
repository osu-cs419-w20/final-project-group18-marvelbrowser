import React from 'react';

function ComicListEntry(props) {
    return (
        <div>
            <a href={`/comics/${props.comic.id}`}>{props.comic.title}</a>
        </div>
    );
}

export default ComicListEntry;